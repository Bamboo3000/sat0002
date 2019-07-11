<?php namespace Sative\Form\Components;

use Cms\Classes\ComponentBase;
use Input;
use Flash;
use Redirect;
use Request;
use Mail;
use Crypt;
use Validator;
use Validation;
use ValidationException;
use Sative\Form\Models\Form;
use Illuminate\Support\Facades\DB;
//use \Anhskohbo\NoCaptcha\NoCaptcha;

class FormSubmit extends ComponentBase
{

    public function componentDetails()
    {
        return [
            'name'        => 'Form Component',
            'description' => 'No description provided yet...'
        ];
    }

    public function onRun()
	{
        //$this->page['cvCaptcha'] = app('captcha')->display(['data-callback' => 'cvCaptchaCallback']);
    }
    
    /*
    *
    * Form submit script
    *
    */
    protected function onSubmit()
    {

        $form_data = array(
            'name' => Input::get('name'),
            'phone' => Input::get('phone'),
            'email' => Input::get('email'),
            'budget' => Input::get('budget'),
            'description' => Input::get('description'),
            'agree' => Input::get('agree'),
        );

        $rules = [
			'name'	        => 'required|min:3',
            'phone'		    => 'required|regex:/[0-9]{9}/',
            'description'   => 'required|min:10',
            'agree'         => 'required|accepted'
        ];

        $validator = Validator::make($form_data, $rules);

        if($validator->fails()){
            throw new ValidationException($validator);
		} else {
            $form_data['agree'] = 1;
            Form::insertGetId(
                [
                    'name' => encrypt($form_data['name']),
                    'phone' => encrypt($form_data['phone']),
                    'email' => encrypt($form_data['email']),
                    'budget' => $form_data['budget'],
                    'description' => $form_data['description'],
                    'agree' => $form_data['agree'],
                ]
            );
            Flash::success('Thank you for your enquiry! We will be in touch with you very soon!');
        }
        
    }

    protected function sendMail($inputs, $subject, $template)
    {
        Mail::send('searchit.jobs::mail.'.$template, $inputs, function($message) use ($inputs, $subject){

            $message->from('info@fundit.com.pl', 'Fundit');
            $message->to($inputs['email'], $inputs['name']);
            $message->subject($subject);

        });
    }

}
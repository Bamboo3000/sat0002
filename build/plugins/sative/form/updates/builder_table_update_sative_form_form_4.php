<?php namespace Sative\Form\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateSativeFormForm4 extends Migration
{
    public function up()
    {
        Schema::table('sative_form_form', function($table)
        {
            $table->renameColumn('money', 'budget');
            $table->dropColumn('comments');
            $table->dropColumn('created_at');
            $table->dropColumn('updated_at');
        });
    }
    
    public function down()
    {
        Schema::table('sative_form_form', function($table)
        {
            $table->renameColumn('budget', 'money');
            $table->text('comments')->nullable();
            $table->timestamp('created_at')->nullable();
            $table->timestamp('updated_at')->nullable();
        });
    }
}

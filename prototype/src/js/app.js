'use strict';

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookieMessage()
{
	if(getCookie('cookieConfirm') !== 'yes') {
		document.getElementById('cookieMessage').classList.add('show');
	}
}

function cookieAgree()
{
	setCookie('cookieConfirm', 'yes', 365);
	document.getElementById('cookieMessage').classList.remove('show');
}

function hasClass(el, cls) 
{
	return el.className && new RegExp("(\\s|^)" + cls + "(\\s|$)").test(el.className);
}

function slideTo(el)
{
	$('html, body').animate({
		scrollTop: $(el).offset().top - 49
	}, 600);
}

function initContactMap()
{
	var contact_map = document.getElementById('contact_map');
	var map = new google.maps.Map(contact_map, {
		center: {lat: 52.3214064, lng: 4.8788931},
		zoom: 11,
		scrollwheel: false,
		draggable: true,
		mapTypeControl: false,
		scaleControl: true,
		streetViewControl: true
	});
	var pathArray = location.href.split( '/' );
	var protocol = pathArray[0];
	var host = pathArray[2];
	var $url = protocol + '//' + host;
	var image = {
		url: $url+'/themes/sative/assets/img/map_logo.png',
		// This marker is 20 pixels wide by 32 pixels high.
		size: new google.maps.Size(238, 328),
		// The origin for this image is (0, 0).
		origin: new google.maps.Point(0, 0),
		// The anchor for this image is the base of the flagpole at (0, 32).
		anchor: new google.maps.Point(30, 82),
		scaledSize: new google.maps.Size(60, 82)
	};
	var marker = new google.maps.Marker({
		map: map,
		position: new google.maps.LatLng(52.3214064,4.8788931),
		icon: image
	});
	// map.set('styles', 
    //     [
    //         {
    //             "featureType": "water",
    //             "elementType": "geometry",
    //             "stylers": [
    //                 {
    //                     "color": "#e9e9e9"
    //                 },
    //                 {
    //                     "lightness": 17
    //                 }
    //             ]
    //         },
    //         {
    //             "featureType": "landscape",
    //             "elementType": "geometry",
    //             "stylers": [
    //                 {
    //                     "color": "#f5f5f5"
    //                 },
    //                 {
    //                     "lightness": 20
    //                 }
    //             ]
    //         },
    //         {
    //             "featureType": "road.highway",
    //             "elementType": "geometry.fill",
    //             "stylers": [
    //                 {
    //                     "color": "#ffffff"
    //                 },
    //                 {
    //                     "lightness": 17
    //                 }
    //             ]
    //         },
    //         {
    //             "featureType": "road.highway",
    //             "elementType": "geometry.stroke",
    //             "stylers": [
    //                 {
    //                     "color": "#ffffff"
    //                 },
    //                 {
    //                     "lightness": 29
    //                 },
    //                 {
    //                     "weight": 0.2
    //                 }
    //             ]
    //         },
    //         {
    //             "featureType": "road.arterial",
    //             "elementType": "geometry",
    //             "stylers": [
    //                 {
    //                     "color": "#ffffff"
    //                 },
    //                 {
    //                     "lightness": 18
    //                 }
    //             ]
    //         },
    //         {
    //             "featureType": "road.local",
    //             "elementType": "geometry",
    //             "stylers": [
    //                 {
    //                     "color": "#ffffff"
    //                 },
    //                 {
    //                     "lightness": 16
    //                 }
    //             ]
    //         },
    //         {
    //             "featureType": "poi",
    //             "elementType": "geometry",
    //             "stylers": [
    //                 {
    //                     "color": "#f5f5f5"
    //                 },
    //                 {
    //                     "lightness": 21
    //                 }
    //             ]
    //         },
    //         {
    //             "featureType": "poi.park",
    //             "elementType": "geometry",
    //             "stylers": [
    //                 {
    //                     "color": "#dedede"
    //                 },
    //                 {
    //                     "lightness": 21
    //                 }
    //             ]
    //         },
    //         {
    //             "elementType": "labels.text.stroke",
    //             "stylers": [
    //                 {
    //                     "visibility": "on"
    //                 },
    //                 {
    //                     "color": "#ffffff"
    //                 },
    //                 {
    //                     "lightness": 16
    //                 }
    //             ]
    //         },
    //         {
    //             "elementType": "labels.text.fill",
    //             "stylers": [
    //                 {
    //                     "saturation": 36
    //                 },
    //                 {
    //                     "color": "#333333"
    //                 },
    //                 {
    //                     "lightness": 40
    //                 }
    //             ]
    //         },
    //         {
    //             "elementType": "labels.icon",
    //             "stylers": [
    //                 {
    //                     "visibility": "off"
    //                 }
    //             ]
    //         },
    //         {
    //             "featureType": "transit",
    //             "elementType": "geometry",
    //             "stylers": [
    //                 {
    //                     "color": "#f2f2f2"
    //                 },
    //                 {
    //                     "lightness": 19
    //                 }
    //             ]
    //         },
    //         {
    //             "featureType": "administrative",
    //             "elementType": "geometry.fill",
    //             "stylers": [
    //                 {
    //                     "color": "#fefefe"
    //                 },
    //                 {
    //                     "lightness": 20
    //                 }
    //             ]
    //         },
    //         {
    //             "featureType": "administrative",
    //             "elementType": "geometry.stroke",
    //             "stylers": [
    //                 {
    //                     "color": "#fefefe"
    //                 },
    //                 {
    //                     "lightness": 17
    //                 },
    //                 {
    //                     "weight": 1.2
    //                 }
    //             ]
    //         }
    //     ]
	// );
}

function menuScroll()
{
	var $nav = $('header.navigation');
	var $scroll = $(window).scrollTop();
	if($scroll >= 100) {
		if(!$nav.hasClass('scrolled')) {
			$nav.addClass('scrolled').removeClass('home');
		}
	} else {
		if($nav.hasClass('scrolled')) {
			$nav.removeClass('scrolled').addClass('home');
		}
	}
}

function lazyImages()
{
	$('.lazy').each(function() {
		var $src = $(this).data('src');
		$(this).attr('src', $src).removeAttr('data-src');	
	});
}

function wpoints()
{
    var waypoints = $('section, header').waypoint(function(direction) {
        $('header.navigation').find('a').removeClass('active');
        $('header.navigation').find('a[data-href="#'+this.element.id+'"]').addClass('active');
     }, {
        offset: 60
    });
}

function placeholder()
{
    $(document).on('focusin', 'input, select, textarea', function() {
        $(this).addClass('active').next('.select, .placeholder').addClass('hide');
    });
    $(document).on('focusout', 'input, select, textarea', function() {
        if(!$(this).val()) {
            $(this).removeClass('active').next('.select, .placeholder').removeClass('hide');
        }
    });
    $(document).on('click', 'select', function() {
        if(!$(this).val()) {
            $(this).removeClass('active').next('.select, .placeholder').removeClass('hide');
        } else {
            $(this).addClass('active').next('.select, .placeholder').addClass('hide');
        }
    });
    $(document).on('change', 'select', function() {
        if(!$(this).val()) {
            $(this).removeClass('active').next('.select, .placeholder').removeClass('hide');
        } else {
            $(this).addClass('active').next('.select, .placeholder').addClass('hide');
        }
    });
}


$(document).ready(function() {
    //wpoints();
    placeholder();
});

$(window).on('load', function() {
    lazyImages();
});

$(window).on('load scroll', function() {
	menuScroll();
});
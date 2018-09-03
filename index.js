// client-side javascript file

// main buttons
var add_btn = document.getElementById('add_btn');
var mov_btn = document.getElementById('mov_btn');
var rem_btn = document.getElementById('rem_btn');

// dropdown menu
var select  = document.getElementById('select');

// initializes dropdown menus
$(document).ready(function() {
    $('select').formSelect();
});

// listeners for main buttons
add_btn.addEventListener('click',function() {
	if(sign.value == 'Sign 1') {
		addMarker('one');
	} else if(sign.value == 'Sign 2') {
		addMarker('two');
	} else if(sign.value == 'Sign 3') {
		addMarker('three');
	} else {
		// do something saying it's wrong
	}
});

mov_btn.addEventListener('click',function() {
});

rem_btn.addEventListener('click',function() {
});

function initMap() 
{
	var weil   = {lat:29.6483,lng:-82.3485};
	var map    = new google.maps.Map(document.getElementById('map'), {zoom:18,center:weil});
	var marker = new google.maps.Marker({
		position : weil,
		map      : map,
		title    : 'The Office is located in Weil 226',
	});
}

function addMarker(sign)
{
	
}

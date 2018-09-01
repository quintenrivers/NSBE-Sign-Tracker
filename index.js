// client-side javascript file
function initMap()
{
	var weil = {lat:29.6483,lng:-82.3485};

	var map = new google.maps.Map(document.getElementById('map'), {zoom:18,center:weil});
	var marker = new google.maps.Marker({position:weil,map:map});
}

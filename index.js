// client-side javascript file
function initMap()
{
	var options =
	{
		zoom: 18, 
		center:{lat:29.6484,lng:-82.3485}
	}

	var map = new google.maps.Map(document.getElementById('map'), options);
}

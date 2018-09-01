// client-side javascript file
function initMap()
{
	var options =
	{
		zoom: 4.5 
		center:{lat: 29.6484,lng:-823485}
	}

	var map = new google.maps.Map(document.getElementbyId('map'), options);
}

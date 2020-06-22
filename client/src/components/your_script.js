function initMap() {
	// Map options
	var options = {
		zoom: 8,
		center: {
			lat: 38.7628,
			lng: -93.736,
		},
	};
	// New map
	var map = new google.maps.Map(document.getElementById('map'), options);
	// Add marker
	var marker = new google.maps.Marker({
		position: {
			lat: 39.0911,
			lng: -94.4155,
		},
		map: map,
		icon:
			'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
	});
	var infoWindow = new google.mapsInfoWindow({
		content: '<h1>Independence MO</h1>',
	});
	marker.addListener('click', function () {
		infoWindow.open(map, marker);
	});
}

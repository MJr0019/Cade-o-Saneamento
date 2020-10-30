var x=document.getElementById("mapaclicker");
function getLocation()
  {
  if (navigator.geolocation)
    {
    navigator.geolocation.getCurrentPosition(showPosition);
    }
  else{x.innerHTML="O seu navegador não suporta Geolocalização.";}
  }
function showPosition(position)
  {

  	var latitude = position.coords.latitude
	var logitude = position.coords.longitude

  //x.innerHTML=" Sua Latitude: " + latitude + "<br> Sua Longitude: " + logitude; 

  

	var mymap = L.map('mapid').setView([latitude, logitude], 13);

	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1
	}).addTo(mymap);

	L.marker([latitude, logitude]).addTo(mymap)
		.bindPopup("<i><b>Sua localiza&ccedil;&atilde;o</i></b><br /> ").openPopup();

	L.circle([latitude, logitude], 900, {
		color: 'red',
		fillColor: '#f03',
		fillOpacity: 0.5
	})//.addTo(mymap).bindPopup("<b>Localiza&ccedil;&atilde;o da comunidade</b><br>");

	L.polygon([
		[latitude, logitude],
		[latitude, logitude],
		[latitude, logitude]
	])//.addTo(mymap).bindPopup("I am a polygon.");


	var popup = L.popup();

	function onMapClick(e) {
		popup
			.setLatLng(e.latlng)
			//.setContent("You clicked the map at " + e.latlng.toString())
			//.openOn(mymap);
	}

	mymap.on('click', onMapClick);


}

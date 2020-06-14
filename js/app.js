var map;
function initMap(position) {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: position.coords.latitude, lng: position.coords.longitude },
    zoom: 18
  });
}

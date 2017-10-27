function createMarker(location, content, map){
    let bounds = new google.maps.LatLngBounds();
    for( i = 0; i < 1; i++ ) {
        var position = new google.maps.LatLng(location.coords.latitude, location.coords.longitude);
        bounds.extend(position);
        let marker = new google.maps.Marker({
            position: position,
            map: map,
            title: 'Hello World'
        });
        
        // Allow each marker to have an info window    
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            let infoWindow = new google.maps.InfoWindow()

            return function() {
                infoWindow.setContent(content);
                infoWindow.open(map, marker);
            }
        })(marker, i));

        // Automatically center the map fitting all markers on the screen
        // map.fitBounds(bounds);
        // google.maps.event.trigger(map, 'resize');
    }
}

let apiKey = 'AIzaSyAWFIyP0ivtZCbMWaqdl7sYS-IIDJkGQHs';

function geoCoding(){
    queryURL = 'https://maps.googleapis.com/maps/api/geocode/json?address=+evanston&key='+apiKey;

    $.ajax({
            url : queryURL,
            method : "GET",
        })
        .done(function(response){
            console.log(response.results[0].geometry.location);
            return response.results[0].geometry.location;
        });
}


function getPosition(options){
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
}

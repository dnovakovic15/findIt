let map;
let service;
let infowindow;
let pyrmont;
let apiKey = 'AIzaSyAWFIyP0ivtZCbMWaqdl7sYS-IIDJkGQHs';

$(document).ready(function(){
    initialize();
})

function initialize() {
  let locationPromise = new Promise((resolve, reject) => {
    let myLocation = currentLocation();

    if(myLocation){
      resolve(myLocation);
    }
  });

  locationPromise.then((successMessage) => {
    console.log('passed');
    createMap();
  })
  .catch(
    setTimeout(function(){
      console.log('Could not retreive locations');
    }, 5000)
  );


  function createMap(){
    console.log(myLocation);
    pyrmont = new google.maps.LatLng(myLocation.lat, myLocation.lng);

    map = new google.maps.Map(document.getElementById('map'), {
        center: pyrmont,
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
      });

    let request = {
      location: pyrmont,
      radius: '500000',
      type: ['restaurant']
    };

    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);
  }

  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      for (let i = 0; i < results.length; i++) {
        let place = results[i];
      }
    }
  }
  }






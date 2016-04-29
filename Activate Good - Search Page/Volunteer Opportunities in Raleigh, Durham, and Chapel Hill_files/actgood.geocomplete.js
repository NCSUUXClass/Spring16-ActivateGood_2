function drawMarker(lat, lng) {
    
    var point = new google.maps.LatLng(lat, lng);

    var mapOptions = {
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: point,
        zoom: 15
    };

    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    marker = new google.maps.Marker({
        position: point
    });

    marker.setMap(map);
}
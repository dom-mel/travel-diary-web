'use strict';

function UploadCtrl($scope) {

    var mapOptions = {
        center: new google.maps.LatLng(30, 0),
        zoom: 1,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        streetViewControl: false
    };
    var map = new google.maps.Map(document.getElementById("uploadMap"), mapOptions);

    var geoCoder = new google.maps.Geocoder();
    var marker = new google.maps.Marker();
    marker.setDraggable(true);

    $scope.selectLocation = function() {

        geoCoder.geocode( { 'address': $scope.location}, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                map.setCenter(results[0].geometry.location);
                marker.setPosition(results[0].geometry.location);
                map.setZoom(5);
                marker.setMap(map);
            } else {
                alert("Geocode was not successful for the following reason: " + status);
            }
        });
    };

    $scope.resetMap = function() {
        map.setCenter(new google.maps.LatLng(30, 0));
        map.setZoom(1);
        $scope.location = "";
        if (marker !== undefined) {
            marker.setMap(null);
        }
    };
}
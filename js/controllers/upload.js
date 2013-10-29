'use strict';

function UploadCtrl($scope, $routeParams, apiService) {

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

    $scope.uploadingFiles = [];

    $scope.upload = function(file) {

        var pos = 0;
        $scope.$apply(function() {
            pos = $scope.uploadingFiles.push({
                name: file.name,
                size: file.size,
                progress: 0,
                status: 'loading'
            });
        });

        var loadEvent = function(e) {
            $scope.$apply(function() { $scope.uploadingFiles[pos-1].progress = 100; });
            if (e.target.status !== 200) {
                $scope.$apply(function() { $scope.uploadingFiles[pos-1].status = 'error'; });
            } else {
                $scope.$apply(function() { $scope.uploadingFiles[pos-1].status = 'done'; });
            }
        };

        var progressEvent = function(e) {
            if (e.lengthComputable) {
                $scope.uploadingFiles[pos].progress = Math.round((e.loaded / e.total) * 100);
            }
        };

        apiService.diary.photo.add(file, $routeParams.id, loadEvent, progressEvent);
    }
}
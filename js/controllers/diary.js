'use strict';

function DiaryCtrl($scope, apiService, $routeParams, $location) {

    apiService.diary.get($routeParams.id).then(function(result) {
        $scope.diary = result.data.diary;
        $scope.upload = function() {
            $location.path('/diary/' + $scope.diary.id + '/upload');
        }
    });

    var mapOptions = {
        center: new google.maps.LatLng(-34.397, 150.644),
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        zoomControl: false,
        panControl: false,
        draggable: false,
        scrollwheel: false,
        keyboardShortcuts: false,
        rotateControl: false,
        disableDoubleClickZoom: true

    };
    var map = new google.maps.Map(document.getElementById("diaryMap"),
        mapOptions);

}
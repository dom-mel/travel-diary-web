'use strict';

function DiaryCtrl($scope, apiService, $routeParams, $location) {

    apiService.diary.get($routeParams.id).then(function(result) {
        $scope.diary = result.data.diary;
        $scope.upload = function() {
            $location.path('/diary/' + $scope.diary.id + '/upload');
        }
    });

}
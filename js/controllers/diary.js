'use strict';

function DiaryCtrl($scope, apiService, $routeParams) {

    apiService.diary.get($routeParams.id).then(function(result) {
        $scope.diary = result.data.diary;
    });



}
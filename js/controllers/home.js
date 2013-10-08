'use strict';

function HomeCtrl($scope, apiService) {

    apiService.diary.all().then(function(response) {
        $scope.diaries = response.data.diaries;
    });

}
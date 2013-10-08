'use strict';

function CreateCtrl($scope, apiService, $location) {

    $scope.create = function() {
        apiService.diary.create($scope.title, $scope.text).then(function(response) {
            if (response.data.success) {
                $location.path('/diary/' + response.data.diaryId);
            } else {
                alert('Some error happened');
            }
        });
    };

}
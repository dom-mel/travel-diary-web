'use strict';

function CreateCtrl($scope, apiService, $location) {

    $scope.create = function() {
        apiService.diary.create($scope.title).then(function(response) {
            if (response.data.success) {
                $location.path('/');
            } else {
                alert('Some error happened');
            }
        });
    };

}
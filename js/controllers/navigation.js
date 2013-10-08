'use strict';

function NavigationCtrl($scope, $location, userService, apiService, $window) {

    $scope.isActive = function(viewLocation) {
        return viewLocation === $location.path();
    };

    userService.then(function(response) {
        $scope.user = response.data.user;
    });

    $scope.logout = function() {
        apiService.user.logout().then(function(response) {
            $window.location.replace('login.htm');
        });
    };

}
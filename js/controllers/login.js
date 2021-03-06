'use strict';

var api = '/travel-diary-api/web/app_dev.php/api/1.0';

function LoginCtrl($scope, $http, $window) {
    $scope.loginError = false;

    $scope.login = function() {
        if (typeof $scope.email == "undefined" || typeof $scope.password == "undefined") {
            return;
        }

        $http.post(api + '/user/login', {'user': $scope.email, 'password': $scope.password})
            .success(function(data) {
                if (!data.success) {
                    $scope.loginError = true;
                    return;
                }
                sessionStorage.sessionId = data.session.session_id;
                $window.location.replace('start.htm');
            })
            .error(function() {
                alert('error');
            });

    }

}
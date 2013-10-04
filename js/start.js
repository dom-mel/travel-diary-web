
var api = '/TravelDiary/web/app_dev.php/api/1.0';

function AppCtrl($scope, $http, $window) {

    if (typeof sessionStorage.sessionId == "undefined") {
        //$window.location.replace('login.htm');
        alert('no session');
    }

    $http({
        'url': api+'/user/current',
        'method': 'GET',
        'params': {'session': sessionStorage.sessionId}
    })
        .success(function(data){
            if (!data.success) {
                $window.location.replace('login.htm');
            }
            alert('Welcome: ' + data.user.email);
        });


}
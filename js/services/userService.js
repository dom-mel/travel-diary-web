
var userService = function($http, $window) {

    if (typeof sessionStorage.sessionId == "undefined") {
        $window.location.replace('login.htm');
    }

    var user = {

        async: function() {
            return $http({
                'url': api+'/user/current',
                'method': 'GET',
                'params': {'session': sessionStorage.sessionId}
            });
        }};

    var promise = user.async();
    promise.then(function(response) {
        if (!response.data.success) {
            $window.location.replace('login.htm');
        }
    });

    return promise;
};
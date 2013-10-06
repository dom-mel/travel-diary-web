'use strict';

var apiService = function($http) {

    var service = {
        logout: function() {
            return $http.post(api + '/user/logout', {session: sessionStorage.sessionId});
        }
    };

    return service;
};


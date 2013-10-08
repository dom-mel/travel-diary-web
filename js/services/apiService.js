'use strict';

var apiService = function($http) {

    var service = {
        user: {
            logout: function() {
                return $http.post(api + '/user/logout', {session: sessionStorage.sessionId});
            }
        },
        diary: {
            create: function(title, text) {
                return $http.post(api + '/diary/create', {
                    session: sessionStorage.sessionId,
                    title: title,
                    text: text
                });
            },
            all: function() {
                return $http.get(api + '/diaries?session=' + encodeURIComponent(sessionStorage.sessionId))
            }
        }
    };

    return service;
};


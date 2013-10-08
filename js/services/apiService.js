'use strict';

var apiService = function($http) {

    var getSession = 'session=' + encodeURIComponent(sessionStorage.sessionId);

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
                return $http.get(api + '/diaries?' + getSession)
            },
            get: function(id) {
                return $http.get(api + '/diary/' + encodeURIComponent(id) + '?' + getSession)
            }
        }
    };

    return service;
};


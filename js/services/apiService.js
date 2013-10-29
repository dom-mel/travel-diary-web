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
            },
            photo: {
                add: function(file, diaryId, loadEvent, progressEvent) {
                    var formData = new FormData();
                    formData.append('photo', file);
                    formData.append('session', sessionStorage.sessionId);

                    var xhr = new XMLHttpRequest();
                    xhr.open('POST', api+"/diary/" + Math.round(diaryId) + "/photo", true);
                    xhr.setRequestHeader("Accept","application/json");

                    xhr.onload = loadEvent;
                    xhr.onprogress = progressEvent;

                    xhr.send(formData);
                }
            }
        }
    };

    return service;
};


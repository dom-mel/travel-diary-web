
var travelDiary = angular.module('travelDiary',[]);

travelDiary.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/',             {templateUrl: 'tpl/home.htm',   controller: HomeCtrl}).
        when('/upload',       {templateUrl: 'tpl/upload.htm', controller: UploadCtrl}).
        otherwise({redirectTo: '/'});
}]);

travelDiary.factory('userService', userService);
travelDiary.factory('apiService', apiService);
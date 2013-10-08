
var travelDiary = angular.module('travelDiary',[]);

travelDiary.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/',             {templateUrl: 'tpl/home.htm',   controller: HomeCtrl})
        .when('/upload',       {templateUrl: 'tpl/upload.htm', controller: UploadCtrl})
        .when('/create',       {templateUrl: 'tpl/create.htm', controller: CreateCtrl})
        .when('/diary/:id',    {templateUrl: 'tpl/diary.htm',  controller: DiaryCtrl})
        .otherwise({redirectTo: '/'});
}]);

travelDiary.factory('userService', userService);
travelDiary.factory('apiService', apiService);
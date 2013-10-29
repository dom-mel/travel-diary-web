
var travelDiary = angular.module('travelDiary',['ngSanitize']);

travelDiary.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/',                 {templateUrl: 'tpl/home.htm',   controller: HomeCtrl})
        .when('/create',           {templateUrl: 'tpl/create.htm', controller: CreateCtrl})
        .when('/diary/:id',        {templateUrl: 'tpl/diary.htm',  controller: DiaryCtrl})
        .when('/diary/:id/upload', {templateUrl: 'tpl/upload.htm', controller: UploadCtrl})
        .otherwise({redirectTo: '/'});
}]);

travelDiary.factory('userService', userService);
travelDiary.factory('apiService', apiService);
travelDiary.directive('locDragAndDrop', DNDDirective);
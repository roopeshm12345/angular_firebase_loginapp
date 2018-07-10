'use strict';
angular.module('webApp.welcome', ['ngRoute'])
.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/welcome', {
		templateUrl:'welcome/welcome.html',
		controller:'welcomeCtrl'
	});
}])
.controller('welcomeCtrl', ['$scope', function($scope){

}]);
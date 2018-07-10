'use strict';
angular.module('webApp.home',['ngRoute', 'firebase'])
.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/home', {
		templateUrl:'home/home.html',
		controller:'homeCtrl',
	});
}])
.controller('homeCtrl',['$scope', '$firebaseAuth', '$location',  function($scope, $firebaseAuth, $location){
	
	$scope.signin=function(){
		var uname=$scope.user.username;
		var password=$scope.user.password;
		var auth=$firebaseAuth();
		auth.$signInWithEmailAndPassword(uname, password).then(function(){
			console.log('successful');
			//CommonProp.setUser($scope.user.username);
			$location.path('/welcome');
		}).catch(function(error){
			var message=error.message;
			console.log(message);
		});
	}
}]);
var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope){
	$scope.firstName = 'Wellignton';
	$scope.lastName = 'Araujo';

	$scope.use = 'Marcus Pereira'
	$scope.email = 'marcus@hotmail.com'

	$scope.master = {firstName: "Wellignton", lastName: "Araujo"};
	$scope.reset = function(){
		$scope.user = angular.copy($scope.master);
	};
	$scope.reset();
	
});

//function myCtrl($scope){
//	$scope.firstName = 'Wellignton';
//	$scope.lastName = 'Araujo';
//}
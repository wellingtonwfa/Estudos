var app = angular.module('app', []);

app.controller('simpleController', function ($scope) {
	$scope.user = {name:"Daniel"};
	
	$scope.counter = 0;

	$scope.addOne = function(){
		$scope.counter++;
	};
	
	$scope.fruits = ['banana','apple','orange'];
});
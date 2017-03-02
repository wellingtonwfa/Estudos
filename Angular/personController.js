//function personController($scope){
//	$scope.firstName="Wellington"
//	$scope.lastName="Araujo"
//	$scope.fullName = function(){
//		return $scope.firstName + " " + $scope.lastName;
//	}
//}

function namesController($scope){
	$scope.names = [
		{name: 'Wellington', country: 'Goias'},
		{name: 'Hanna', country: 'Tocantins'},
		{name: 'Joao', country: 'Minas'}
	];

}

function costController($scope){
	//$scope.quantity
	//$scope.price
}

function customersController($scope,$http){
	var site = "http://www.w3schools.com";
	var page = "/website/Customers_MySQL.php";
	$http.get(site + page).success(function(response){
		$scope.names = response;
	});
}

function myController(){

}

function personController($scope){
	$scope.firstName = 'Wellington';
	$scope.lastName = 'Araujo';
	$scope.myVar = true;
	$scope.toggle = function(){
		$scope.myVar = !$scope.myVar;
	};

};
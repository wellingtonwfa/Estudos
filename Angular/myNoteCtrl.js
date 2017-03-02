app.controller("myNoteCtrl", function($scope){
	$scope.message = "";
	$scope.left = function(){return 100 - $scope.message.length;};
	$scope.limpar = function(){$scope.message = "";};
	$scope.save = function(){alert("Nota Salva");};
})
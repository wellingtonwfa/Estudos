
function listaComprasController($scope){
	$scope.itens = [
		{produto: 'Leite', quantidade: 2, comprado: false},
		{produto: 'Pao', quantidade: 1, comprado: true}
	];
	
	$scope.adicionaItem = function(){
		$scope.itens.push({
			produto: $scope.item.produto,
			quantidade: $scope.item.quantidade,
			comprado: false
		});
		
		$scope.item.produto = $scope.item.quantidade = '';
		
	};
};
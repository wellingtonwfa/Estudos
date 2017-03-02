var mvcApp = angular.module('filtersApp', ['ngRoute']);

mvcApp.service('statesService', function($http){
  var states = {};

  this.getLetters = function(){
    return 'abcdefghijklmnopqrstuvwyz';
  };

  this.getToday = function(){
    return new Date();
  };

  this.addStateIntoCollection = function(estado, capital, renda){
      states.push({
        name: estado,
        capital: capital,
        renda: renda
      });
  };

  this.getStates = function(callback){    
    $http.get('states.json').success(callback);
  };
});

////--- AQUI VAI O CONTROLLER (agora mais magro)
mvcApp.controller('controller', function($scope, statesService) {

  $scope.filtro = "";

  statesService.getStates(function(data){
    $scope.states = data;
  });
  
  $scope.today = statesService.getToday();
  $scope.letras = statesService.getLetters();

  $scope.addState = function() {
    statesService.addStateIntoCollection($scope.estado, $scope.capital, 1325.66);
    $scope.estado = '';
    $scope.capital = '';
  };

});
// $scope, $element, $attrs, $injector, $sce, $timeout, $http, $ionicPopup, and $ionicPopover services are available

var timerId = -1;
var IncrementoAng = 5; // degrees
var IncrementoTiempo = 100; // miliseconds

$scope.rotarModelo = function(){

  if (timerId >-1){
    clearInterval(timerId);
  }
  
  timerId = setInterval(function(){
    if(!$scope.app.params.rz){
      $scope.app.params.rz = 0;
    }
    $scope.$apply(function(){
      $scope.app.params.rz+=IncrementoAng});
  }, IncrementoTiempo); 
};


$scope.noRotarModelo = function(){
	$scope.app.params.rz = 0
};
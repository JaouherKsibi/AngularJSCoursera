(function () {
  "use strict";

  angular
    .module("LunchCheck",[])
    .controller('LunchCheckController', LunchCheckController);
    LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.inputText = "";
      $scope.totalValue = 0;
      $scope.placehold ="list comma separated dishes you usually have for lunch";
        $scope.message="";
        function calculNb($scope){
          var list1=[]
          $scope.inputText.split(",").forEach(element => {
            element=element.replace(/\s+/g, '');
            if (element!='') {
                list1.push(element);
            }
          });
          return list1;
         }
    $scope.getNb =function () {
      $scope.totalValue= calculNb($scope).length;
      if ($scope.inputText== "") {
        $scope.message="Please enter data first"
      } else if($scope.totalValue>=1 && $scope.totalValue<=3) {
        $scope.message="Enjoy!"+$scope.totalValue;
      }
      else if($scope.totalValue>3) {
        $scope.message="Too much!"+$scope.totalValue;
      }
    }
  }
  
  
})();

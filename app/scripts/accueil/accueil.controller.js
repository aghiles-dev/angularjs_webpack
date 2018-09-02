export function AccueilController($scope, AccueilFactory) {
  $scope.name = "";
  
  $scope.deleteElementByIndex = deleteElementByIndex;
  $scope.addTaskToList = addTaskToList;
  $scope.calculateNumberOfelementsContainingThree = calculateNumberOfelementsContainingThree;
  
  $scope.listeTaches = [
    "tache1",
    "tache2",
    "tache3",
    "tache4"
  ];
  
  function addTaskToList(){
    $scope.listeTaches.push($scope.name);
    $scope.name = "";
    
  }
  
  function deleteElementByIndex(index) {
    $scope.listeTaches.splice(index, 1);
  }
  
  function calculateNumberOfelementsContainingThree() {
    return AccueilFactory.calculateNumberOfelementsContainingThree($scope.listeTaches);
  }
}
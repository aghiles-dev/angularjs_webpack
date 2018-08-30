export function navigationDirective() {
  return {
    restrict: 'E',
    templateUrl: 'scripts/navigation/navigation.template.html',
    controller: "NavigationController",
    scope: {}
  };
}
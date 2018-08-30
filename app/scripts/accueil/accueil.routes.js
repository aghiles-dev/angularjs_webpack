export function AccueilRoutes($routeProvider) {
  return $routeProvider
    .when("/accueil", {
      templateUrl:
        "scripts/accueil/accueil.template.html",
      controller: "AccueilController"
    });
}

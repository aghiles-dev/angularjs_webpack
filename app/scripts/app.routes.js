export function AppRoutes($routeProvider) {
  return $routeProvider
    .when("/", { redirectTo: "/accueil" })
    .otherwise({
      redirectTo: "/"
    });
}

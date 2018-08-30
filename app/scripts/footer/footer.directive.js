export function footerDirective() {
  return {
    restrict: 'E',
    templateUrl: 'scripts/footer/footer.template.html',
    controller: "FooterController",
    scope: {}
  };
}
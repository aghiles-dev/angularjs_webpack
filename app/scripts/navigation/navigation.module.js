import angular from "angular";
import { navigationDirective } from "./navigation.directive";
import { NavigationController } from "./navigation.controller";

const NavigationModule = angular
  .module("Navigation", [])
  .controller("NavigationController", NavigationController)
  .directive("navigationDirective", navigationDirective).name;

export { NavigationModule };
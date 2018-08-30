import angular from "angular";
import { footerDirective } from "./footer.directive";
import { FooterController } from "./footer.controller";

const FooterModule = angular
  .module("Footer", [])
  .controller("FooterController", FooterController)
  .directive("footerDirective", footerDirective).name;

export { FooterModule };
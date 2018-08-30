import angular from "angular";
import { AccueilRoutes } from "./accueil.routes";
import { AccueilController } from "./accueil.controller";

const AccueilModule = angular
  .module("accueil", [])
  .config(AccueilRoutes)
  .controller("AccueilController", AccueilController).name;

export { AccueilModule };
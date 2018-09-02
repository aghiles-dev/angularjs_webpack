import angular from "angular";
import { AccueilRoutes } from "./accueil.routes";
import { AccueilController } from "./accueil.controller";
import { AccueilFactory } from "./accueil.factory";

const AccueilModule = angular
  .module("accueil", [])
  .config(AccueilRoutes)
  .factory("AccueilFactory", AccueilFactory)
  .controller("AccueilController", AccueilController).name;

export { AccueilModule };
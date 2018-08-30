import angular from "angular";
import ngRoute from "angular-route";
import { AppRoutes } from "./app.routes";
import { AccueilModule } from "./accueil/accueil.module";
import { FooterModule } from "./footer/footer.module";
import { NavigationModule } from "./navigation/navigation.module";

const AppModule = angular
  .module("app", [
    ngRoute,
    FooterModule,
    NavigationModule,
    AccueilModule
  ])
  .config(AppRoutes).name;

export { AppModule };
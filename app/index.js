import angular from "angular";

import "jquery";
import "angular-toastr/dist/angular-toastr.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "components-font-awesome/css/font-awesome.css";

import "./styles/main.scss";

import { AppModule } from "./scripts/app.module";

angular.element(document).ready(function() {
  const body = document.getElementsByTagName("body")[0];
  
  angular.bootstrap(body, [AppModule], { strictDi: false });
});

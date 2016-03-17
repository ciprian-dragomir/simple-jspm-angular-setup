import angular from "angular";
import "./main.js";

// Additional flags (override) here / pull from external config
window.DEBUG = true;
angular.element(document).ready(function() {
    angular.bootstrap(document, ['app']);
});
import angular from "angular";
import "angular-ui-router";

angular.module('app', ['ui.router'])
    .config(['$stateProvider',
        function ($stateProvider) {
            $stateProvider.state('home', {
                url: '/home',
                views: {
                    mainContent: {
                        template: '<h3>Welcome Home</h3>',
                        controller: ['$scope', '$http', function($scope, $http) {
                            DEBUG && console.log('@ Home controller');
                        }]
                    }
                },
                onEnter: function() {
                    DEBUG && console.log('@ui-state home');
                }
            });
        }
    ]);

export default angular.module('app');
'use strict';

/**
 * @ngdoc overview
 * @name sagepageApp
 * @description
 * # sagepageApp
 *
 * Main module of the application.
 */
angular
  .module('sagepageApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

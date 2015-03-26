'use strict';

/**
 * @ngdoc overview
 * @name yeomanApp
 * @description
 * # yeomanApp
 *
 * Main module of the application.
 */
angular
  .module('App', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/registrationpage.html',
        controller: 'registrationpageCtrl'
      })
      .when('/registrants',{
        templateUrl: 'views/registrants.html',
        controller: 'registrantsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

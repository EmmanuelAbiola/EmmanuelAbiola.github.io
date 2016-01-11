'use strict'

var app = angular.module('app', ['ui.router', 'ngAnimate']);

app.config(function($stateProvider, $urlRouterProvider) {
  // For any unmatched url, redirect to /
  $urlRouterProvider.otherwise("/home");

  $stateProvider
    .state('home', {
      url: '/home',
      views: {
        '': {
          templateUrl: 'views/home/index.html'
        },
        'home@bio': {
          templateUrl: 'views/home/bio.html'
        },
        'home@project': {
          templateUrl: 'views/home/projects.html',
          controller: 'projectsController'
        },
        'home@contact': {
          templateUrl: 'views/home/contact.html'
        }
      }
    })  
    .state('home.project', {
      url:'/project/:id',
      templateUrl: 'partials/modal.html',
      controller: 'modalController'
    })
});
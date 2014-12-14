'use strict';

angular.module('expressLearningApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('snippets', {
        url: '/snippets',
        templateUrl: 'app/snippets/snippets.html',
        controller: 'SnippetsCtrl'
      });
  });
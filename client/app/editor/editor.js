'use strict';

angular.module('expressLearningApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('editor', {
        url: '/editor',
        templateUrl: 'app/editor/editor.html',
        controller: 'EditorCtrl'
      });
  });
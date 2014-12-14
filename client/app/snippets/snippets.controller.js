'use strict';

angular.module('expressLearningApp')
  .controller('SnippetsCtrl', function ($scope, $http, $location) {
    $scope.snippets = [];

    $http.get('/api/snippets').success(function(snippets) {
      $scope.snippets = snippets;
    });

    $scope.addSnippet = function() {
      if($scope.newSnippet === '') {
        return;
      }
      $http.post('/api/snippets', { name: $scope.newSnippet });
      $scope.newSnippet = '';
    };

    $scope.deleteSnippet = function(idx) {
      
      var snippetToDelete = $scope.snippets[idx];
      var check = confirm('Delete '+snippetToDelete.title+' permanently?');
      if (check == true) {
      // delete from server
      $http.delete('/api/snippets/' + snippetToDelete._id).
      success(function() {
        // this callback will be called asynchronously
        // when the response is available
        console.info('Successfully deleted '+snippetToDelete.title+'!');
      }).
      error(function() {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.info('failed to delete '+snippetToDelete.title+'!');
      });
      // find snippet in scope
      var index = $scope.snippets.indexOf(idx);
      //remove it - ng-repeat then auto updates
      $scope.snippets.splice(index+1, 1); 
      } else {
          
      }

    };

    $scope.editSnippet = function(idx){
      var snippetToEdit = $scope.snippets[idx];
      var editPath = '/editor/' + snippetToEdit._id;
      $location.path(editPath);
    };

  });


'use strict';

describe('Controller: SnippetsCtrl', function () {

  // load the controller's module
  beforeEach(module('expressLearningApp'));

  var SnippetsCtrl,
      scope,
      $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/snippets')
      .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);

    scope = $rootScope.$new();
    SnippetsCtrl = $controller('SnippetsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of things to the scope', function () {
    $httpBackend.flush();
    expect(scope.snippets.length).toBe(4);
  });
});

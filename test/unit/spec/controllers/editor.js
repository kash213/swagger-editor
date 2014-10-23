'use strict';

describe('Controller: EditorCtrl', function () {

  // load the controller's module
  beforeEach(window.angular.mock.module('PhonicsApp'));

  var EditorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditorCtrl = $controller('EditorCtrl', {
      $scope: scope
    });
  }));

  it('should have a scope', function () {
    expect(!!scope).toBe(true);
  });
});

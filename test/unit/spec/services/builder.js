'use strict';

describe('Service: Builder', function () {

  // load the service's module
  beforeEach(window.angular.mock.module
('PhonicsApp'));

  // instantiate service
  var Builder;
  beforeEach(inject(function (_Builder_) {
    Builder = _Builder_;
  }));

  it('should do something', function () {
    expect(!!Builder).toBe(true);
  });

});

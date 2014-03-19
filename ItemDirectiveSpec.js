describe("item directive", function() {
  var $scope, element;

  beforeEach(module("CheckoutModule"));
  beforeEach(inject(function($compile, $rootScope) {
    $scope = $rootScope;
    $scope.doSomething = jasmine.createSpy();
    element = angular.element("<item name='Apple' action='doSomething(item)'>test</item>");
    $compile(element)($rootScope);
  }));

  it ("has a button", function() {
    expect(element.html()).toContain("button");
  });

  it ("calls the action on click", function() {
    element.find("button").triggerHandler("click");
    expect($scope.doSomething).toHaveBeenCalledWith("Apple");
  });
});

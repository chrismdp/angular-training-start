describe("checkout controller", function() {
  var controller, checkout, priceList;

  beforeEach(inject(function($q) {
    checkout = jasmine.createSpyObj('checkout', ['scan'])
    priceList = jasmine.createSpyObj("priceList", ["priceFor"]);

    var d = $q.defer();
    d.resolve(25);
    priceList.priceFor.andReturn(d.promise);

    controller = new CheckoutCtrl(checkout, priceList);
  }));

  it ("calls scan with item passed to 'add'", function() {
    controller.add("Kiwi");
    expect(checkout.scan).toHaveBeenCalledWith('Kiwi');
  });

  it ("checks the price and sets checkedPrice", inject(function($rootScope) {
    controller.priceCheck("Kiwi");
    $rootScope.$apply();
    expect(controller.checkedPrice).toEqual(25);
  }));
});

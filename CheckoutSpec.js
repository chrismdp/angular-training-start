describe("cart total", function() {
  var checkout, priceList;

  beforeEach(inject(function($q) {
    var d = $q.defer();
    d.resolve(25);
    priceList = jasmine.createSpyObj("priceList", ["priceFor"]);
    priceList.priceFor.andReturn(d.promise);
    checkout = new Checkout(priceList);
  }));

  it("returns 0", function() {
    expect(checkout.total()).toEqual(0);
  });

  it("adds the price of an item", inject(function($rootScope) {
    checkout.scan("Kiwi");
    $rootScope.$apply();
    expect(checkout.total()).toEqual(25);
  }));

  it("continues to add the price", inject(function($rootScope) {
    checkout.scan("Kiwi");
    checkout.scan("Kiwi");
    $rootScope.$apply();
    expect(checkout.total()).toEqual(50);
  }));

  it ("passes the item through", function() {
    checkout.scan("Kiwi");
    expect(priceList.priceFor).toHaveBeenCalledWith("Kiwi");
  });
});


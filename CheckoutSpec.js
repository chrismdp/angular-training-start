describe("cart total", function() {
  var checkout, priceList;

  beforeEach(function() {
    priceList = jasmine.createSpyObj("priceList", ["priceFor"]);
    priceList.priceFor.andReturn(25);
    checkout = new Checkout(priceList);
  });

  it("returns 0", function() {
    expect(checkout.total()).toEqual(0);
  });

  it("adds the price of an item", function() {
    checkout.scan("Kiwi");
    expect(checkout.total()).toEqual(25);
  });

  it("continues to add the price", function() {
    checkout.scan("Kiwi");
    checkout.scan("Kiwi");
    expect(checkout.total()).toEqual(50);
  });

  it ("passes the item through", function() {
    checkout.scan("Kiwi");
    expect(priceList.priceFor).toHaveBeenCalledWith("Kiwi");
  });
});


describe("cart total", function() {
  var checkout;

  beforeEach(function() {
    priceList = {
      priceFor: function() { return 25; }
    }
    checkout = new Checkout(priceList);
  });

  it("returns 0", function() {
    expect(checkout.total()).toEqual(0);
  });

  it("it adds the price of an item", function() {
    checkout.scan("Kiwi");
    expect(checkout.total()).toEqual(25);
  });

  it("it continues to add the price", function() {
    checkout.scan("Kiwi");
    checkout.scan("Kiwi");
    expect(checkout.total()).toEqual(50);
  });
});


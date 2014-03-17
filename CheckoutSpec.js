describe("cart total", function() {
  var checkout;

  beforeEach(function() {
    checkout = new Checkout;
  });

  it("returns 0", function() {
    expect(checkout.total()).toEqual(0);
  });

  it("is the price of a Kiwi when a Kiwi is scanned", function() {
    checkout.scan("Kiwi");
    expect(checkout.total()).toEqual(checkout.priceList.priceFor("Kiwi"));
  });

  it("is 100 when two Kiwis are scanned", function() {
    checkout.scan("Kiwi");
    checkout.scan("Kiwi");
    expect(checkout.total()).toEqual(checkout.priceList.priceFor("Kiwi") * 2);
  });

  it("is 75 when Bananas are scanned", function() {
    checkout.scan("Banana");
    expect(checkout.total()).toEqual(checkout.priceList.priceFor("Banana"));
  });
});


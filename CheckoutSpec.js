describe("cart total", function() {
  var checkout;

  beforeEach(function() {
    checkout = new Checkout;
  });

  it("returns 0", function() {
    expect(checkout.total()).toEqual(0);
  });

  it("is 50 when a Kiwi is scanned", function() {
    checkout.scan("Kiwi");
    expect(checkout.total()).toEqual(50);
  });

  it("is 100 when two Kiwis are scanned", function() {
    checkout.scan("Kiwi");
    checkout.scan("Kiwi");
    expect(checkout.total()).toEqual(100);
  });
});


describe("checkout controller", function() {
  var controller;
  beforeEach(function() {
    controller = new CheckoutCtrl();
  });

  it ("increments total on click of scan", function() {
    controller.add("Kiwi");
    expect(controller.checkout.total()).toEqual(controller.checkout.priceList.priceFor("Kiwi"));
  });
});


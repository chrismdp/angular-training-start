describe("checkout controller", function() {
  var controller;
  beforeEach(function() {
    controller = new CheckoutCtrl();
  });

  it ("increments total on click of scan", function() {
    controller.add();
    expect(controller.checkout.total()).toEqual(50);
  });
});

function CheckoutCtrl(Checkout, PriceList) {
  this.checkout = Checkout;
  this.priceList = PriceList;

  this.add = function(item) {
    this.checkout.scan(item);
  }

  this.priceCheck = function(item) {
    var ctrl = this;
    this.priceList.priceFor(item).then(function(price) {
      ctrl.checkedPrice = price;
    });
  }
}

function Checkout(PriceList) {
  this.priceList = PriceList;
  this._total = 0;

  this.total = function() {
    return this._total;
  };

  this.scan = function(item) {
    var checkout = this;
    this.priceList.priceFor(item).then(function(price) {
      checkout._total += parseInt(price);
    });
  };
};

function Checkout(PriceList) {
  this.priceList = PriceList;
  this._total = 0;

  this.total = function() {
    return this._total;
  };
  this.scan = function(item) {
    this._total += this.priceList.priceFor(item);
  };
};

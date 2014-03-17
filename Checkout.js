function Checkout() {
  this.priceList = {
    "Kiwi": {price: 50},
    "Banana": {price: 75}
  };

  this._total = 0;
  this.total = function() {
    return this._total;
  };
  this.scan = function(item) {
    this._total += this.priceList[item].price;
  };
};

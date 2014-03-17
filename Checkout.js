function PriceList() {
  this.prices = {
    "Kiwi": 500,
    "Banana": 75
  };

  this.priceFor = function(item) {
    return this.prices[item];
  }
};

function Checkout() {
  this.priceList = new PriceList;
  this._total = 0;

  this.total = function() {
    return this._total;
  };
  this.scan = function(item) {
    this._total += this.priceList.priceFor(item);
  };
};

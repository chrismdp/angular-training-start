function PriceList() {
  this.prices = {
    "Kiwi": 50,
    "Banana": 75
  };

  this.priceFor = function(item) {
    return this.prices[item];
  }
};

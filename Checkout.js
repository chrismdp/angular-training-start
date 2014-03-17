function Checkout() {
  this._total = 0;
  this.total = function() {
    return this._total;
  };
  this.scan = function(item) {
    if (item == "Kiwi") {
      this._total += 50;
    } else {
      this._total += 75;
    }
  };
};

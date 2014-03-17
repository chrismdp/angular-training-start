function Checkout() {
  this._total = 0;
  this.total = function() {
    return this._total;
  };
  this.scan = function() {
    this._total += 50;
  };
};

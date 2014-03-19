function MoneyFilter() {
  return function(money) {
    if (!money) {
      return "£0.00";
    }
    return "£" + (money/100).toFixed(2);
  }
};
CheckoutModule.filter("money", MoneyFilter);

var CheckoutModule = angular.module("CheckoutModule", []);
CheckoutModule.service("PriceList", PriceList);
CheckoutModule.service("Checkout", Checkout);
CheckoutModule.controller("CheckoutCtrl", CheckoutCtrl)

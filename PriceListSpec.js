describe("getting a price list", function() {
  var priceList;
  var data = {"prices":{"Kiwi":{"price":"25"}}};
  var $httpBackend;

  beforeEach(inject(function($injector, $http, $q) {
    $httpBackend = $injector.get('$httpBackend');
    $httpBackend.when('GET').respond(data);
    priceList = new PriceList($http, $q);
  }));

  it("collects prices from the back end", function() {
    var output;
    priceList.getPrices().then(function(prices) {
      output = prices;
    });
    $httpBackend.flush();
    expect(output).toEqual(data.prices);
  });

  it("returns a price after calling the promise", function() {
    var output;
    priceList.priceFor("Kiwi").then(function(price) {
      output = price;
    });
    $httpBackend.flush();
    expect(output).toEqual(25);
  });
});


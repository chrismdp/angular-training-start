describe("money filter", function() {
  var filter;

  it ("formats 0 as £0.00", function() {
    expect(MoneyFilter()("0")).toEqual("£0.00");
  });

  it ("formats 120 as £1.20", function() {
    expect(MoneyFilter()("120")).toEqual("£1.20");
  });
});

var stock = "1 lemon, 2 cabbages, 106 beans, 100 peanuts, and 101 eggs";
function minusOne(match, amount, unit) {
  amount = Number(amount) - 1;
  if (amount == 1) // only one left, remove the 's'
    unit = unit.slice(0, unit.length - 1);
  else if (amount == 0)
    amount = "no";
// Here is where the "zillions of" replace takes place
  else if (amount >= 100)
    amount = "zillions of";
  return amount + " " + unit;
}
print(stock.replace(/(\d+) (\w+)/g, minusOne));

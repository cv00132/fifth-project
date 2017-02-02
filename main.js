//1. Show me how to calculate the average price of all items.

function averagePrice () {
  var prices = [];
  var avgPrice = 0;

  for (var i = 0; i < items.length; i++) {
    prices.push(items[i].price);
  }
  for (var count = 0; count < prices.length; count++) {
     avgPrice = avgPrice += prices[count];
  }
    return (avgPrice/prices.length).toFixed(2);
}

//2. Show me how to get an array of items that cost between $14.00 and $18.00 USD

function midPriced () {
  var midPriceItems = [];

  for (var i = 0; i < items.length; i++) {
    if (items[i].price < 18 && items[i].price > 14) {
      midPriceItems.push(items[i].title);
    }
  }

  return midPriceItems;

}

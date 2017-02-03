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

//3. Which item has a "GBP" currency code? Display it's name and price.

function findBrit () {
  var britItem = "";

  for (var i = 0; i < items.length; i++) {
    if (items[i].currency_code === "GBP") {
      britItem = items[i].title;
    }
  }
  return britItem;
}

//4. Display a list of all items who are made of wood.

function findWood () {
  var woodItem = [];

  for (var i = 0; i < items.length; i++) {
    if ((items[i].materials).includes("wood")) {
      woodItem.push(items[i].title);
    }
  }
  return woodItem;
}

//5. Which items are made of eight or more materials? Display the name, number of items and the items it is made of.

function mulMaterials () {
  var moreMaterials = [];

  for (var i = 0; i < items.length; i++) {
    if (items[i].values(materials) < 9) {
      moreMaterials.push(items[i].title);
    }
  }  return moreMaterials;
}

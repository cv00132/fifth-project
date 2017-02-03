//1. Show me how to calculate the average price of all items.
var answerBox1 = document.getElementById("answer1");

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

answerBox1.innerHtml = averagePrice();

//2. Show me how to get an array of items that cost between $14.00 and $18.00 USD
var answerBox2 = document.getElementById("answer2");


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
var answerBox3 = document.getElementById("answer3");


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
var answerBox4 = document.getElementById("answer4");


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
var answerBox5 = document.getElementById("answer5");


function mulMaterials () {
  var moreMaterials = [];
  var numMaterials = [];

  for (var i = 0; i < items.length; i++) {
    if (items[i].materials.length > 7) {
      moreMaterials.push(items[i].title);
      moreMaterials.push(items[i].quantity);
      moreMaterials.push(items[i].materials);
    }
    for (var count = 0; i < moreMaterials.length; count++){
      numMaterials.push(count[i].materials);
    }
  }  return moreMaterials + numMaterials;
}


//6. How many items were made by their sellers?
var answerBox6 = document.getElementById("answer6");


function madeSeller () {
  var count = 0;
  for (var i = 0; i < items.length; i++) {
    if (items[i].who_made === "i_did") {
      count++;
    }
  }
  return count;
}

answerBox6.innerHtml = madeSeller;

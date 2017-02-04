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

answerBox1.innerHTML = "The average price is $" + averagePrice(items);

//2. Show me how to get an array of items that cost between $14.00 and $18.00 USD
var answerBox2 = document.getElementById("answer2");


function midPriced () {

  for (var i = 0; i < items.length; i++) {
    if (items[i].price < 18 && items[i].price > 14) {
      answerBox2.innerHTML += "<p>" + items[i].title + "</p>"
    }
  }
}

midPriced();

//3. Which item has a "GBP" currency code? Display it's name and price.
var answerBox3 = document.getElementById("answer3");


function findBrit () {
  var britItem = "";
  var britItemPrice = 0;

  for (var i = 0; i < items.length; i++) {
    if (items[i].currency_code === "GBP") {
      britItem = items[i].title;
      britItemPrice = items[i].price;
    }
  }
  answerBox3.innerHTML = britItem + " " + "&pound" + britItemPrice;
}

findBrit();

//4. Display a list of all items who are made of wood.
var answerBox4 = document.getElementById("answer4");


function findWood () {

  for (var i = 0; i < items.length; i++) {
    if ((items[i].materials).includes("wood")) {
      answerBox4.innerHTML += "<p>" + items[i].title + " is made of wood." + "</p>";
    }
  }
}

findWood();

//5. Which items are made of eight or more materials? Display the name, number of items and the items it is made of.
var answerBox5 = document.getElementById("answer5");


function mulMaterials () {

  for (var i = 0; i < items.length; i++) {
    if (items[i].materials.length > 7) {
      answerBox5.innerHTML += "<p>" + items[i].title + " has " + items[i].materials.length + " materials." + "</p>";
    for (var count = 0; count < items[i].materials.length; count++){
      answerBox5.innerHTML += "<p>" + items[i].materials[count] + "</p>";
     }
    }
  }
}

mulMaterials ();

//6. How many items were made by their sellers?
var answerBox6 = document.getElementById("answer6");


function madeSeller () {
  var count = 0;
  for (var i = 0; i < items.length; i++) {
    if (items[i].who_made === "i_did") {
      count++;
    }
  } answerBox6.innerHTML = count + " were made by their sellers."
}

madeSeller();

var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100) + 1;
  var itemObject = {}
  itemObject[item] = price
  cart.push(itemObject)
  console.log(item + " has been added to your cart.")
  return cart
}

var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100) + 1;
  var itemObject = {}
  itemObject[item] = price
  cart.push(itemObject)
  console.log(item + " has been added to your cart.")
  return cart
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else {
    var items = [];
    for (var i = 0; i < cart.length; i++) {
      for (var item in cart[i]) {
        items.push(item + " at $" + cart[i][item])
      }
    }
    if (cart.length === 1){
      console.log('In your cart, you have ' + items[0] + '.')
    } else if (cart.length === 2){
      console.log('In your cart, you have ' + items[0] + ' and ' + items[1] + '.')
    } else {
        var remove = items.pop()
        console.log(`In your cart, you have ${items.join(", ")}, and ${remove}.`); 
    }
  }
}

viewCart()

function total() {
  let t = 0
  for (var i = 0; i < cart.length; i++){
    for (var item in cart[i]){
      t += cart[item][i]
    }
  }
  return t
}

function removeFromCart(item) {
  for (var i = 0; )
}

function placeOrder(cardNumber) {
  // write your code here
}

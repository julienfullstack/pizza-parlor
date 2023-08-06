// Business logic

function PizzaOrder() {
  this.pizza= [],
  this.currentId = 0
}

function Pizza(toppings,size) {
  this.toppings = toppings,
  this.size = size,
}

PizzaOrder.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

PizzaOrder.prototype.addpizza = function(pizza) {
  pizza.id = this.assignId();
  this.pizzas.push(pizza);
}

PizzaOrder.prototype.findpizza = function(id) {
  for (var i=0; i< this.pizzas.length; i++) {
    if (this.pizzas[i]) {
      if (this.pizzas[i].id == id) {
        return this.pizzas[i];
      }
    }
  };
  return false;
}

PizzaOrder.prototype.deletepizza = function(id) {
  for (var i=0; i< this.pizzas.length; i++) {
    if (this.pizzas[i]) {
      if (this.pizzas[i].id == id) {
        delete this.pizzas[i];
        return true;
      }
    }
  };
  return false;
}


// UI LOGIC // 

const pizzaOrder = new PizzaOrder();


const size = document.querySelector('input[name="size"]:checked').value;
const toppings = Array.from(document.querySelectorAll('input[name="topping"]:checked')).map(topping => topping.value);


function addToCart() {
  const size = document.querySelector('input[name="size"]:checked').value;
  const toppings = Array.from(document.querySelectorAll('input[name="topping"]:checked')).map(topping => topping.value);

  

  const cartItem = document.createElement('div');
  cartItem.classList.add('cart-item');
  cartItem.textContent = `${size} Pizza with ${toppings.join(', ')} Toppings`;


  const cart = document.getElementById('cart');
  cart.appendChild(cartItem);
}


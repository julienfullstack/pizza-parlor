// Business logic

function PizzaOrder() {
  this.toppings = toppings;
  this.size = size;
  this.cost = 0;
}

Pizza.prototype.determineCost = function() {
  if (this.size === "medium") {
    this.cost += 15;
  } else {
    this.cost += 20;
  };
  
  this.cost += this.toppings.value;

  return this.cost;
};

// UI LOGIC // 

const size = document.querySelector('input[name="size"]:checked').value;
const toppings = Array.from(document.querySelectorAll('input[name="topping"]:checked')).map(topping => topping.value);



function handleForm() {
  event.preventDefault();
  const size = document.querySelector('input[name="size"]:checked');
  const toppings = Array.from(document.querySelectorAll('input[name="topping"]:checked')).map(topping => topping.value);

  var pizzaOrder = new PizzaOrder();

  const cartItem = document.createElement('div');
  cartItem.classList.add('cart-item');
  cartItem.textContent = `${size} Pizza with ${toppings.join(', ')} Toppings`;

  const selectedOptions = document.getElementById('selected-options');

}

window.addEventListener("load", function() {
  this.document.querySelector("form").addEventListener("submit", handleForm)
});
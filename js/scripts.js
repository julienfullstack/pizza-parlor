function PizzaOrder(toppings, size) {
  this.toppings = toppings;
  this.size = size;
  this.cost = 0;
}

PizzaOrder.prototype.orderCost = function() {
  if (this.size === "Personal") {
    this.cost += 15;
  } else if (this.size === "Large") {
    this.cost += 20;
  }

  this.toppings.forEach(function(topping) {
    this.cost += parseFloat(topping);
  }, this);

  return this.cost;
};

document.querySelector('form').addEventListener('change', function(event) {
  const size = document.querySelector('input[name="size"]:checked').value;
  const toppings = Array.from(document.querySelectorAll('input[name="topping"]:checked')).map(topping => topping.value);
  const selectedToppings = Array.from(document.querySelectorAll('input[name="topping"]:checked')).map(topping => topping.getAttribute("id"));

  const selectedOptions = document.querySelector("#selected");
  selectedOptions.textContent = "Size: " + size + ", Toppings: " + selectedToppings.join(", ");

  let newPizza = new PizzaOrder(toppings, size);
  const orderCost = newPizza.orderCost();
  const totalCost = document.querySelector("#total");
  totalCost.textContent = "Total: $" + orderCost.toFixed(2);
});

window.addEventListener("DOMContentLoaded", function() {
  document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
  });
});

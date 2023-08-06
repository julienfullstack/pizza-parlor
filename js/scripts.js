function PizzaOrder(toppings, size) {
  this.toppings = toppings;
  this.size = size;
  this.cost = 0;
}

PizzaOrder.prototype.orderCost = function() {
  if (this.size === "personal") {
    this.cost += 15;
  } else if (this.size === "large") {
    this.cost += 20;
  }
  
  this.toppings.forEach(function(topping) {
    this.cost += parseFloat(topping);
  }, this);

  return this.cost;
};

function handleForm(event) {
  const size = document.querySelector('input[name="size"]:checked').value;
  const toppings = Array.from(document.querySelectorAll('input[name="topping"]:checked')).map(topping => topping.value);
  
  let newPizza = new PizzaOrder(toppings, size);
  newPizza.orderCost();

  const selectedOptions = document.querySelector("#selected");
  selectedOptions.append("Size: " + size + "Toppings: " + toppings);
  document.body.append(selectedOptions);

  const cost = document.querySelector("#total);
  cost.append("Total: $ " + cost);
  document.body.append(cost);
}

window.addEventListener("load", function() {
  this.document.querySelector("form").addEventListener("submit", handleForm)
});
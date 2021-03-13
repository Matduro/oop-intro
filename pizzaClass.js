class Pizza {

  constructor(size, crust) {
    this.size = size;
    this.crust = crust;
    this.toppings = ["cheese"];
    this.glutenFree = false;
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

  changeCrust() {
    if (this.crust === 'thin') {
      this.crust = "thick";
    } else if (this.crust === "thick") {
      this.crust = "thin";
    }
  }

  glutenRemove() {
    if (this.glutenFree === false) {
      this.glutenFree = true;
    } else if (this.glutenFree === true) {
      this.glutenFree = false;
    }
  }

}

// Our Pizza blueprint is now describing two methods (constructor and addTopping) as well as a property toppings. You can add a method to a class with the following syntax:
let pizza = new Pizza('large', 'thin');
console.log(pizza);
pizza.addTopping("mushrooms");
pizza.addTopping("peppers");
pizza.addTopping("more cheese");
console.log(pizza);
pizza.changeCrust();
console.log(pizza);
pizza.glutenRemove();
console.log(pizza);

let pizza1 = new Pizza();
console.log(pizza1.toppings); // ["cheese"]
pizza1.addTopping("mushrooms");
pizza1.addTopping("peppers");
console.log(pizza1.toppings); // ["cheese", "mushrooms", "peppers"]

let pizza2 = new Pizza();
console.log(pizza2.toppings); // ["cheese"]
pizza2.addTopping("more cheese");
console.log(pizza2.toppings); // ["cheese", "more cheese"];
/*
Any new instance of the Pizza class will really behave the same way as this:

const pizza1 = {
  toppings: ["cheese"],
  addTopping: function(topping) {
    this.toppings.push(topping);
  }
}

const pizza2 = {
  toppings: ["cheese"],
  addTopping: function(topping) {
    this.toppings.push(topping);
  }
}
*/
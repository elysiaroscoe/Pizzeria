function pizzaOven(bread, protein, cheese, toppings) {
    var pizza = {};
    pizza.crustType = bread;
    pizza.sauceType = protein;
    pizza.cheeses = cheese;
    pizza.toppings = toppings;
    return pizza;
}
    
var p1 = pizzaOven("deep dish", "traditional", "mozzerella", ["pepperoni", "sausage"]);
console.log(p1);

var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"] )
console.log(p2)
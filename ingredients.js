var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let list = 0
while (list < ingredients.length) {
  console.log(ingredients[list]);
  list++
}
console.log("_____")

// Write a for loop that prints out the contents of ingredients:
for (var i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}
console.log("_____")

// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (var i = 0; i < ingredients.length; i++) {
  console.log(ingredients[ingredients.length-1-i]);
}
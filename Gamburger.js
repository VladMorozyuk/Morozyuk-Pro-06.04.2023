// class Hamburger {
//     constructor(size, stuffing) {
//         this.size = size;
//         this.stuffing = stuffing;
//         this.toppings = [];
//     }

//     addTopping(topping) {
//         this.toppings.push(topping);
//     }

//     calculatePrice() {
//         const sizePrice = Hamburger.SIZES[this.size].price;
//         const stuffingPrice = Hamburger.STUFFINGS[this.stuffing].price;
//         const toppingsPrice = this.toppings.reduce((total, topping) => {
//             return total + Hamburger.TOPPINGS[topping].price;
//         }, 0);

//         return sizePrice + stuffingPrice + toppingsPrice;
//     }

//     calculateCalories() {
//         const sizeCalories = Hamburger.SIZES[this.size].calories;
//         const stuffingCalories = Hamburger.STUFFINGS[this.stuffing].calories;
//         const toppingsCalories = this.toppings.reduce((total, topping) => {
//             return total + Hamburger.TOPPINGS[topping].calories;
//         }, 0);

//         return sizeCalories + stuffingCalories + toppingsCalories;
//     }
// }

// Hamburger.SIZES = {
//     small: { price: 50, calories: 20 },
//     large: { price: 100, calories: 40 }
// };

// Hamburger.STUFFINGS = {
//     cheese: { price: 10, calories: 20 },
//     salad: { price: 20, calories: 5 },
//     potato: { price: 15, calories: 10 }
// };

// Hamburger.TOPPINGS = {
//     seasoning: { price: 15, calories: 0 },
//     mayo: { price: 20, calories: 5 }
// };

// const hamburger = new Hamburger("small", "cheese");
// hamburger.addTopping("seasoning");
// hamburger.addTopping("mayo");

// const price = hamburger.calculatePrice();
// const calories = hamburger.calculateCalories();

// console.log("Вартість гамбургера: " + price + " тугриків");
// console.log("Калорійність гамбургера: " + calories + " калорій");
"use strict";
// Question 17: Seeing the World: Think of at least five places you’d like to visit.
Object.defineProperty(exports, "__esModule", { value: true });
let places_want_to_visit = ["america", "london", "paris", "saudi arabia"];
console.log(`these are the orders`);
console.log("original order", places_want_to_visit);
console.log("alphabetical order", [...places_want_to_visit].sort());
console.log("reverse order", [...places_want_to_visit].reverse());
console.log("alphabetical order reverse order", [...places_want_to_visit].sort().reverse());
console.log("reverse order alphabetical order", [...places_want_to_visit].reverse().sort());

// Question 17: Seeing the World: Think of at least five places you’d like to visit.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places_want_to_visit = ["america", "london", "paris", "saudi arabia"];
console.log("these are the orders");
console.log("original order", places_want_to_visit);
console.log("alphabetical order", __spreadArray([], places_want_to_visit, true).sort());
console.log("reverse order", __spreadArray([], places_want_to_visit, true).reverse());
console.log("alphabetical order reverse order", __spreadArray([], places_want_to_visit, true).sort().reverse());
console.log("reverse order alphabetical order", __spreadArray([], places_want_to_visit, true).reverse().sort());

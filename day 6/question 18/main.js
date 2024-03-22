"use strict";
// Question 18: Dinner Guests: Use one of your programs from Exercises 14 through 18 to print a message indicating the number of people you are inviting to dinner.
Object.defineProperty(exports, "__esModule", { value: true });
let guests = ["hanzala", "ahmed", "faizan"];
guests.forEach(guests => {
    console.log(`i am inviting ${guests} to dinner`);
});
let guest_numbers = guests.length;
console.log(`i am inviting ${guest_numbers} people on dinner`);

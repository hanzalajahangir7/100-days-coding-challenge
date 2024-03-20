// Question 18: Dinner Guests: Use one of your programs from Exercises 14 through 18 to print a message indicating the number of people you are inviting to dinner.
var guests = ["hanzala", "ahmed", "faizan"];
guests.forEach(function (guests) {
    console.log("i am inviting ".concat(guests, " to dinner"));
});
var guest_numbers = guests.length;
console.log("i am inviting ".concat(guest_numbers, " people on dinner"));

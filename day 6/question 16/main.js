// Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.
var guests = ["hanzala", "ahmed", "faizan", "ali"];
var removeguests = guests.splice(0, 2);
guests.forEach(function (guests) {
    return console.log("".concat(guests, " are being invited"));
});
removeguests.forEach(function (guest) {
    console.log("sorry ".concat(guest, " is not invited"));
});

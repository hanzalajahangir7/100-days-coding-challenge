// print previous guest list
var guest_list = ["anisha", "ali", "bob", "sultan"];
console.log(guest_list);
// print new guest name
var replacementGuest = "asma";
// print guest index to replace the one who is not coming
var indexOfGuestReplacement = 2;
// replace the index with the new guest name
guest_list[indexOfGuestReplacement] = replacementGuest;
// now sum up the list with for loop
for (var _i = 0, guest_list_1 = guest_list; _i < guest_list_1.length; _i++) {
    var guests = guest_list_1[_i];
    console.log("invitation for ".concat(guests));
}

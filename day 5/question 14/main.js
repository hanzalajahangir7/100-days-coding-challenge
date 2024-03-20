"use strict";
// Question 15: Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.
Object.defineProperty(exports, "__esModule", { value: true });
// Step 1: Initialize the Guest List Array
let guestList = ["Alice", "Bob", "Charlie", "David", "Eve"];
// Step 2: Replacing a Guest
const guestWhoCantMakeIt = "Charlie";
const replacementGuest = "Frank";
const index = guestList.indexOf(guestWhoCantMakeIt);
if (index !== -1) {
    // Replace the guest who can't make it with the replacement guest
    guestList[index] = replacementGuest;
}
else {
    console.log(`${guestWhoCantMakeIt} is not in the guest list.`);
}
// Step 3: Sending New Invitations
console.log("Sending out new invitations:");
guestList.forEach(guest => {
    console.log(`Dear ${guest}, you are invited to the dinner.`);
});

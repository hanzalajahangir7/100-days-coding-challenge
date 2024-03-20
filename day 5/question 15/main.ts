// Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.

// Define an array of guests
let guests: string[] = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];

// Print the announcement
console.log("Great news! I found a bigger dinner table!");

// Add more guests
guests.unshift("Isaac Newton"); // Add Isaac Newton to the beginning of the array
guests.splice(Math.floor(guests.length / 2), 0, "Charles Darwin"); // Add Charles Darwin to the middle of the array
guests.push("Ada Lovelace"); // Add Ada Lovelace to the end of the array

// Invite guests
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});

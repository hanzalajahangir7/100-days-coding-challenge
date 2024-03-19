// print previous guest list
let guest_list:string[]=["anisha","ali","bob","sultan"]
console.log(guest_list)

// print new guest name
let replacementGuest="asma"

// print guest index to replace the one who is not coming
let indexOfGuestReplacement:number=2

// replace the index with the new guest name
guest_list[indexOfGuestReplacement]=replacementGuest

// now sum up the list with for loop
for (let guests of guest_list) {
    console.log(`invitation for ${guests}`)
}

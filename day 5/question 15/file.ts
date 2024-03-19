let all_guests : string[] = ["ali","bhaag","gettie","rowandf","jimmy"]
// for adding in the end
all_guests.push("hanzala","ahmed")

// for adding in the beginning
all_guests.unshift("akmal","babar")

// for adding according to the index or in the middle or wherever you want
let indextoadd = 3

let guesttoadd = ["anna","faizan"]

all_guests.splice(indextoadd, 0, ...guesttoadd)


// using forloop to print your statement
for (let guests of all_guests) {
    console.log(guests)
}
// Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.

let guests: string[] = ["hanzala","ahmed","faizan","ali"]

let removeguests=guests.splice(0,2)

guests.forEach(guests=>
    console.log(`${guests} are being invited`))

removeguests.forEach(guest => {
    console.log(`sorry ${guest} is not invited`)
})


// Question 20: Think of something you could store in an array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

let languages:string[]=["urdu","english","portuguese","espanyol","sindhi"]

languages.forEach((languages, index)=>{
    console.log(`${index + 1}.${languages}`)
})
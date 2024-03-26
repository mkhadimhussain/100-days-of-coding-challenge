/////////////////DAY 1 CHALLENGE//////////////////////

//QUESTION 1: install Node.js, Tyoescript and VS Code on your Computer/Laptop.
//DONE

//QUESTION 2: Personal Message: Store a person’s name in a variable and print a message to them, 
//            like “Hello Asharib, would you like to learn some TypeScript today?”

const perName : string = "Atif"
console.log(`Hello ${perName}, would you like to learn some TypeScript today?`)

//another way
console.log("Hello" + " " + perName + ", " + "would you like to learn some TypeScript today?")

//another way
console.log('Hello' ,perName, ', would you like to learn some TypeScript today?')

//QUESTION 3: Name Cases: Store a person’s name in a variable, and then print that person’s name 
//            in lowercase, uppercase, and titlecase.

const name1 : string = "abDusAlaaM"
console.log(name1.toLowerCase())          //for small letters
console.log(name1.toUpperCase())          //for big/capital letters
console.log(name1.charAt(0).toUpperCase() + name1.slice(1).toLowerCase())   //for 1st char big other small

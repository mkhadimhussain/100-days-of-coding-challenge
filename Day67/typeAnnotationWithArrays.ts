// Type Annotations With Arrays

// Type annotations with arrays allow you to specify the expected data types of the array elements,
// ensuring type safety in your code.

// Annotating an array of string 
let fruits: string[] = ["Apple", "Banana", "Mango"];

// Using a loop to process each element in the array
for (let i = 0; i < fruits.length; i++) {
    console.log(`Fruits: ${fruits[i].toUpperCase()}`);
}
// Output:
// Fruits: APPLE
// Fruits: BANANA
// Fruits: MANGO

// 1- We annotate the fruits array as an array of strings.
// 2- We use a for loop to iterate over the fruits array and display each fruit in uppercase letters.

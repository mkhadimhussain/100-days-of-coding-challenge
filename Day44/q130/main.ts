/////////////////// DAY 44 CHALLENGE ///////////////////

//QUESTION 130: Explain how to export a function from one JavaScript file and import it into another file.

// In another file where you want to use the add function:
import { add } from "./mathFunction";

console.log(add(2,5));  // outputs: 7
// Demonstrates importing the add function from mathFunctions.ts

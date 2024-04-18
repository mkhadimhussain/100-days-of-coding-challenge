"use strict";
/////////////////// DAY 44 CHALLENGE ///////////////////
Object.defineProperty(exports, "__esModule", { value: true });
//QUESTION 130: Explain how to export a function from one JavaScript file and import it into another file.
// In another file where you want to use the add function:
var mathFunction_1 = require("./mathFunction");
console.log((0, mathFunction_1.add)(2, 5)); // outputs: 7
// Demonstrates importing the add function from mathFunctions.ts

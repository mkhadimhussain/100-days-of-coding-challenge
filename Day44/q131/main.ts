/////////////////// DAY 44 CHALLENGE ///////////////////

//QUESTION 131: Create two modules; one that exports a class, and another that imports the class and 
//creates an instance.

// In another file:
import { person } from "./person";

const alice = new person("Alice");
alice.greet();  // outputs: Hello, my name is Alice
// This snippet imports the person class and uses it to create an instance.

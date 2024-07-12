// Interface Method And Parameters

// In TypeScript, an interface can define not only the structure of an object but also the
// signature of functions or methods that objects adhering to the interface should have.This
// allows you to specify not just the properties but also the methods and their parameters
// and return types that should be present in objects implementing the interface.

// Define an interface 'Person' with a mathod 'greet'
interface Person {
    name: string;
    age: number;
    greet(message: string): void;
}

// Create an object that adheres to the 'Person' interface
const sarah: Person = {
    name: "Sarah",
    age: 23,
    greet(message: string): void {
        console.log(`${this.name} say: ${message}`);
    },
};

sarah.greet("Hello, TypeScript");  // Output: Sarah say: Hello, TypeScript

// In this example:

// 1- Interface Declaration: We define an interface named Person with three members:
// - name: A property of type string.
// - age: A property of type number.
// - greet: A method that takes a parameter of type string and returns void (indicating that
//   it doesn't return any value).

// 2- Object Creation: We create an object alice that adheres to the PersonEx2 interface. It
//    has properties name and age, as well as a greet method that takes a message and logs it to
//    the console.

// 3- Method Invocation: We call the greet method on the alice object, passing in a message.
//    The method uses the object's properties to construct a greeting message and logs it to the
//    console.



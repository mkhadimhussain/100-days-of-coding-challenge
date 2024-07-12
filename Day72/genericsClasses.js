// Generics Classes
// Generics in classes allow you to create flexible and reusable class structures that can work
// with a variety of data types, enhancing code flexibility and type safety.
// In this example, we'll explore generics in classes using the 'User' class as an example
// Generic Class `User`
var User = /** @class */ (function () {
    function User(value) {
        this.value = value;
    }
    // Method that takes a message of type `T` and displays it along with the `value` property
    User.prototype.show = function (msg) {
        console.log("".concat(msg, " - ").concat(this.value));
    };
    return User;
}());
// Creating an instance of `User` with a specific type parameter (string)
var userOne = new User("Elzero");
console.log(userOne.value); // Outputs: Elzero
userOne.show("Message"); // Outputs: Message - Elzero
// Creating an instance of `User` with a type parameter that can be a number or a string
var userTwo = new User(100);
console.log(userTwo); // Outputs: 100
userTwo.show("Message"); // Outputs: 100
// In this example:
// - We define a generic class User<T = string>, which allows us to create instances of the User
//   class with different data types. The class takes a type parameter T, and by default, it is
//   set to string if no type is provided.
// - The constructor of the User class accepts an initial value of type T.
// - The show method of the User class takes a message of type T and displays it along with the
//   value property. This method demonstrates how a generic class can work with the type specified
//   by the type parameter T.
// - We create two instances of the User class: userOne with the type parameter explicitly set to
//   string, and userTwo with the type parameter set to number | string. This showcases how the
//   same class can be used with different data types while preserving type safety.

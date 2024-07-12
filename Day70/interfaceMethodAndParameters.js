// Interface Method And Parameters
// Create an object that adheres to the 'Person' interface
var sarah = {
    name: "Sarah",
    age: 23,
    greet: function (message) {
        console.log("".concat(this.name, " say: ").concat(message));
    },
};
sarah.greet("Hello, TypeScript"); // Output:

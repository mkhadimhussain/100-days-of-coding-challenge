// Interface vs. Type Aliases
var Labrador = /** @class */ (function () {
    function Labrador() {
    }
    Labrador.prototype.bark = function () {
        console.log("Woof!");
    };
    return Labrador;
}());
var labrador = {
    type: "monkey",
    bark: function () {
        console.log("Woof!");
    },
};
var myCar = {
    brand: "Toyota",
    model: "Camry",
};
// Type Alias: Does not support declaration merging. If you declare multiple type aliases with the
// same name, you'll get an error.
//----------------------------------------------------------------------------------------------
// 4. Extensibility:
// Interface: Use when you need to define the shape of objects and also when you need to implement
// them in classes. They are more suitable for defining contracts that classes must adhere to.
// Type Alias: Use when you want to create custom types that can be combined using union types,
// intersection types, or when defining complex types.
//----------------------------------------------------------------------------------------------
// 5. Readability and Style:
// Interface: Preferred when defining shapes of objects, especially for public APIs, as they convey
// the intent clearly. They also work well with code editors' IntelliSense for auto-completion and
// documentation generation.
// Type Alias: Useful for defining unions, intersections, and more complex types. They are often
// used to give descriptive names to specific combinations of types.
//----------------------------------------------------------------------------------------------
// In most cases, the choice between interfaces and type aliases depends on your specific use case
// and coding style. Both are valuable tools in TypeScript for defining custom types and enhancing
// code readability and maintainability.

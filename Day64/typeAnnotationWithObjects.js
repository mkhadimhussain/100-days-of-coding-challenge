// Type Annotations With Objects
// Type annotations with objects in TypeScript allow you to specify the types of properties
// that an object should have.
var person1;
person1 = {
    name: "Alice",
    age: 23,
    jobTitle: "Engineer", // if i comment this line so person2 doesn't show error
    address: {
        street: "123 Main St",
        city: "Wonderland",
    },
};
// And there is yet another method
var person2 = {
    name: "Alice",
    age: 23,
    jobTitle: "Engineer", // if i comment this line so person2 doesn't show error
    address: {
        street: "123 Main St",
        city: "Wonderland",
    },
};
// we're defining an object named personExTwo with specific type annotations for its properties:
// - name is a required string property for the person's name.
// - age is a required number property for the person's age.
// - jobTitle is an optional string property for the person's job title, indicated by jobTitle?: string.
// - address is an object with two required properties: street (string) and city (string).

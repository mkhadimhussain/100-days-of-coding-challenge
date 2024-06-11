// Intersection Type

// An intersection type in TypeScript allows you to combine multiple types into one, creating a new
// type that has all the properties and functionalities of the individual types being intersected.

// Here's a simple example to illustrate:

type FirstType = {
    name: string;
    age: number;
};

type SecondType = {
    address: string;
    phone: string;
};

type CombinedType = FirstType & SecondType;

const person: CombinedType = {
    name: "Alice",
    age: 23,
    address: "123 Main St",
    phone: "123-456-7890",
};

// In this example, we have two types, FirstType and SecondType. We then create a new type
// CombinedType by using the & (intersection) operator, which combines the properties of both
// FirstType and SecondType. The CombinedType includes all properties from both types, allowing
// you to use them together.

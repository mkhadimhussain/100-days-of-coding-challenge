// class static members

// Static members in a class are properties or methods that belong to the class itself, rather
// than to instances of the class. This means you can access them without creating an instance
// of the class. They are defined using the static keyword in TypeScript. In this case, the
// static member nextId is used to manage unique IDs for all instances of the ProductStaticMembers
// class.

class productStaticMembers {
    private static nextId: number = 1;

    constructor(private id: number, private name: string) {}

    static generateNextId(): number {
        return productStaticMembers.nextId++;
    }

    getProductInfo(): string {
        return `ID: ${this.id}, Name: ${this.name}`
    }
}

// Generate unique IDs for products using the static method
const product1Static = new productStaticMembers(productStaticMembers.generateNextId(), "Widget");
const product2Static = new productStaticMembers(productStaticMembers.generateNextId(), "Gadget");

console.log(product1Static.getProductInfo());  // Output: ID: 1, Name: Widget
console.log(product2Static.getProductInfo());  // Output: ID: 2, Name: Gadget


// In this example:

// - We've added a private static property nextId to the Product class. This property keeps track
//   of the next available ID for products.

// - The generateNextId static method allows us to obtain the next ID in a controlled manner and
//   increments nextId for the next call.

// - When creating instances of the ProductStaticMembers class, we use the static method 
//   ProductStaticMembers.generateNextId() to generate unique IDs for each product.

// - Each product instance retains its unique ID and other properties.


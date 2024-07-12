// Class accessors

// Class accessors, also known as getters and setters, are a way to control access to the
// properties of a class. They allow you to get and set the values of class properties while
// providing additional control and logic if needed. Accessors are defined using the 'get' and
// 'set' keywords.

class ProductExAccessors {
    // 'private' property
    private _price: number;

    constructor(private id: number, private name: string) {
        this._price = 0;  // Default price
    }

    // 'public' getter for price
    get price(): number {
        return this._price;
    }

    // 'public' setter for price
    set price(newPrice: number) {
        if (newPrice >= 0) {
            this._price = newPrice;
        } else {
            console.log("Price cannot be negative.");
        }
    }

    getProductInfo(): string {
        return `ID: ${this.id}, Name: ${this.name}, Price: $${this._price}`
    }
}

// Create an instance of the ProductExAccessors class
const productEx = new ProductExAccessors(1, "Widget");

console.log(productEx.getProductInfo());  // Default Price: ID: 1, Name: Widget, Price: $0

// Use the 'setter' to update the price
productEx.price = 20.0;

console.log(productEx.getProductInfo()); // Updated Price: ID: 1, Name: Widget, Price: $20

// Attempting to set a negative price triggers the setter logic
productEx.price = -5;  // Price cannot be negative.

// In this example:

// - We've added a private property _price to the ProductExAccessors class, which stores the
//   product's price.

// - Accessors (get and set) for the price property provide controlled access to _price. The
//   get method retrieves the price, and the set method allows setting it while enforcing a
//   non-negative constraint.

// - When the price property is set to a negative value, a message is logged to indicate that
//   it's not allowed.

// - The getProductInfo method still uses _price to display the product's price.

// - We demonstrate using the setter to update the price and handle a case where an invalid
//   (negative) price is attempted to be set.

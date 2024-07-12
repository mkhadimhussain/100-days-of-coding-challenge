// class access modifiers:

// In TypeScript, class access modifiers are keywords used to control the visibility and
// accessibility of class members (properties and methods) from outside the class.
// There are three main access modifiers:
// 1- public
// 2- private
// 3- protected


// 1- public: Members declared as public are accessible from anywhere, both within and outside
// the class. This is the default modifier if you don't explicitly specify one.

// Example:
class MyClassPublic {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const instancePublic = new MyClassPublic("John");

// Accessing the public property
console.log(instancePublic.name);  // Output: John

console.log(instancePublic);       // Output: MyClassPublic { name: 'John' }

//---------------------------------------------------------------------------------------------------

// 2- private: Members declared as private are only accessible from within the class they are defined
// in. You cannot access private members from outside the class.

// Example:
class MyClassPrivate {
    private secret: string;

    constructor(secret: string) {
        this.secret = secret;
    }

    revealSecret() {
        console.log(this.secret);  // Accessing the private property from within the class
        
    }
}

const instancePrivate = new MyClassPrivate("My Secret");
// console.log(instancePrivate.secret);  // This would result in an error because secret is private
instancePrivate.revealSecret();  // This is a valid way to access the private property
// Output: My Secret

console.log(instancePrivate);  // Output: MyClassPrivate { secret: 'My Secret' }

//---------------------------------------------------------------------------------------------------

// 3- protected: Members declared as protected are accessible from within the class they are defined
// in and from subclasses (derived classes). You cannot access protected members from outside the
// class or unrelated classes.

// Example:
class Parent {
    protected familyName: string;

    constructor(name: string) {
        this.familyName = name;
    }
}

class Child extends Parent {
    intrduceFamily() {
        console.log(`Our Family name is ${this.familyName}`);
    }
}

const parent1 = new Parent("Smith")
const child1 = new Child("Johnson");

// console.log(parent1.familyName); // This would result in an error because familyName is protected
child1.intrduceFamily();  // This is a valid way to access the protected property
// Output: Our Family name is Johnson

console.log(parent1);  // Output: Parent { familyName: 'Smith' }

//---------------------------------------------------------------------------------------------------

// These access modifiers help you encapsulate the internal details of a class and provide a level
// of control over how class members are accessed and manipulated. They are essential for
// maintaining the integrity and security of your code in larger applications.

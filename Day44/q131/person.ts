// In file: person.ts
export class person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}
// Exports the person class 



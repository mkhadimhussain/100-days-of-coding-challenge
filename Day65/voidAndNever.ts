// void & never
// In TypeScript, void and never are two distinct types that represent different concepts:

// 1- void Type:

// - The void type is used to indicate the absence of a value. It represents functions that do
//   not return any value or return undefined.
// - It's often used to annotate functions that perform actions or side effects but don't produce
//   a meaningful result that needs to be assigned or captured.

// Example:
function greet(name: string): void {
    console.log(`Hello, ${name}!`);   
}

function noReturnValue(): void {
    // This function doesn't return a value (implicitly returns undefined)
}

// In the greet function, it logs a message but doesn't return anything, so its return type is void.

//--------------------------------------------------------------------------------------------------

// 2- never Type:

// The never type is used to represent values that never occur. It's typically associated with
// functions that never return, either because they throw exceptions, enter infinite loops, or
// have unreachable code.

// Example:
function throwError(message: string): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while(true) {
        // This function never exits (infinite loop)
    }
}

// In the throwError function, it throws an error and never returns normally. In the infiniteLoop
// function, it enters an infinite loop and never exits, resulting in a never return type.

// Tuple
// A tuple is a data type in TypeScript that is similar to an array but has a fixed number
// of elements, and you can specify the types of each element at specific positions within
// the tuple. Here's an explanation based on the provided code:
// Defining a tuple type
var article = [11, "Title One", true];
// Assiggning a new tuple value to the `article` variable
article = [12, "Title Two", false];
// Trying to push a new element into a tuple (will result in an error)
// article.push(100);  // Error  (if we not use the readonly if will not show the error)
console.log(article); // Output: [ 12, 'Title Two', false ]
// Destructing:
// Destructuring is a convenient way of extracting values from arrays or properties from objects
// and assigning them to variables.
// Destructing the tuple into individual variables
var id = article[0], title = article[1], published = article[2];
console.log(id); // Output: 12
console.log(title); // Output: Title Two
console.log(published); // Output: false
// - We define a tuple type for the article variable, specifying that it should have three
//   elements with specific types: a number, a string, and a boolean.
// - We assign a matching tuple value to article.
// - We demonstrate that you can reassign a new tuple value that matches the type structure.
// - We show that tuples are fixed in size and can't have additional elements added.
// - Lastly, we use destructuring to extract and display the individual elements of the article tuple.
// readonly:
// In TypeScript, the readonly keyword is used to make properties of an object immutable,
// meaning they cannot be reassigned after the initial assignment. When used with an array
// type, readonly makes the entire array and its elements immutable.
// The "readonly" modifier applied to this tuple means that you cannot change the elements of the
// article tuple after it has been initialized. This ensures that the tuple remains constant and
// prevents any reassignment or modification of its elements.
// For example, attempts to modify the article tuple will result in an error:
// article[0] = 42; // Error: Index signature in type 'readonly [number, string, boolean]' 
//        only permits reading.
// article.push("new element"); // Error: Property 'push' does not exist on type 'readonly
// [number, string, boolean]'.

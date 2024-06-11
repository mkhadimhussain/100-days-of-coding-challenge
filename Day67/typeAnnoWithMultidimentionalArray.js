// Type Annotations With Multidimensional Arrays
var arrayOne = [1, 2, 3, 4, 5];
var arrayTwo = ["A", "B", "C"];
var arrayThree = ["A", "B", "C", 1, 2, 3, 4, 5];
// In this code:
// 1- arrayOne is declared as an array of numbers, annotated with the type number[]. This means
//    it can only contain numeric values.
// 2- arrayTwo is declared as an array of strings, annotated with the type string[]. It should
//    only contain string values.
// 3- arrayThree is declared as an array that can hold elements of either type string or number,
//    annotated with (string | number)[]. This array allows for a mixture of numeric and string
//    values within the same array.

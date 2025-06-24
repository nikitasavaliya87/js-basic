// Primitive and non primitive data types in JavaScript
// Primitive data types are immutable and non-primitive data types are mutable  
// Primitive data types: string, number, boolean, null, undefined, symbol, bigint   

// Non-primitive data types: object, array, function
// const fruits = ['apple', 'banana', 'orange'];
// let person = {
//   name: 'John',
//   age: 30,
//   isEmployed: true
// };
// const nyfunction = function() {
//   console.log('Hello, New York!');
// }   
// console.log(typeof person); // object



// Memory management in JavaScript
// stack and heap memory
// Stack memory is used for primitive data types and function calls, its give original value
// Heap memory is used for non-primitive data types like objects and arrays, its give reference value

// let user1= {
//     email: "Nikita@gmail.com"
// };

// let user2 = user1; // user2 is a reference to the same object in memory 
// user2.email = "taral@gmail.com"; // changing the email property of user2 will also change user1's email

// console.log(user1.email); // Output: "taral@gmail.com
// console.log(user2.email); 



// Strings in JavaScript
const name="Nikita";
const count=20;
console.log(`My name is ${name} and I have ${count} apples.`); 
console.log(` I am ${name.toUpperCase()} and I have ${count.toFixed(2)} apples.`); // toUpperCase() converts the string to uppercase, toFixed(2) formats the number to 2 decimal places


const str=new String("Nikita")
console.log(str); // String { "Nikita" }
console.log(str[1]); // "i" - accessing the second character of the string
console.log(str.__proto__); // String.prototype - accessing the prototype of the string object  
console.log(str.charAt(2)); // "k" - accessing the character at index 2 of the string   
console.log(str.length); // 6 - getting the length of the string    
console.log(str.indexOf("k")); // 2 - getting the index of the first occurrence of "k" in the string    
console.log(str.lastIndexOf("k")); // 2 - getting the index of the last occurrence of "k" in the string
console.log(str.includes("ki")); // true - checking if the string contains "ki"
console.log(str.startsWith("Nik")); // true - checking if the string starts with "Nik"
console.log(str.endsWith("ta")); // true - checking if the string ends with "ta"
console.log(str.slice(1, 4)); // "iki" - slicing the string from index 1 to index 4 (exclusive)
console.log(str.substring(1, 4)); // "iki" - extracting a substring from index 1 to index 4 (exclusive)
console.log(str.replace("Nikita", "Tara")); // "Tara" - replacing "Nikita" with "Tara"
console.log(str.split("i")); // [ 'N', 'kita' ] - splitting the string into an array using "i" as the delimiter
console.log(str.toLowerCase()); // "nikita" - converting the string to lowercase
console.log(str.toUpperCase()); // "NIKITA" - converting the string to uppercase
console.log(str.trim()); // "Nikita" - removing whitespace from both ends of the string
console.log(str.trimStart()); // "Nikita" - removing whitespace from the start of the string
console.log(str.trimEnd()); // "Nikita" - removing whitespace from the end of the string
console.log(str.charCodeAt(0)); // 78 - getting the Unicode value of the character at index 0
console.log(str.codePointAt(0)); // 78 - getting the Unicode code point of the character at index 0
console.log(str.concat(" is a developer.")); // "Nikita is a developer." - concatenating another string to the original string
console.log(str.repeat(2)); // "NikitaNikita" - repeating the string 2 times
console.log(str.match(/k/)); // [ 'k', index: 2, input: 'Nikita', groups: undefined ] - matching the first occurrence of "k" using a regular expression




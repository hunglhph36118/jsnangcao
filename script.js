// Log number
//console.log(100);

// Log string
//console.log('Hello World');

// Log multiple values
// console.log(20, 'Hello', true);

// Log a variable
//const x = 100;
//console.log(x);

// Console error & warning
// console.error('Alert');
// console.warn('Warning');

// Log object as table
// console.table({ name: 'Brad', email: 'brad@gmail.com' });

//Group console commands
// console.group('simple');
// console.log(x);
// console.error('Alert');
// console.warn('Warning');
// console.groupEnd();

// Add CSS to logs
//const styles = 'padding: 10px; background-color: white; color: green';
// console.log('%cHello World', styles);
// Ways to declare a variable
// `var`, `let`, & `const`

//let firstName = 'John';
//const lastName = 'Doe';
//let age = 30;

//console.log(age);

// Naming Conventions
// - Only letters, numbers, underscores and dollar signs
// - Can't start with a number

// Multi-Word Formatting
// firstName = camelCase
// first_name = underscore
// FirstName = PascalCase
// firstname = lowercase

// We can re-assign `let` variables. If you change `age` to use `const`, you will get an error
//age = 31;
//console.log(age);

// With let, we can declare a value without assigning a value
//let score;
//score = 1;
//console.log(score);

//if (true) {
 // score = score + 1;
//}

//console.log(score);

//const x = 100;

// We can not re-assign a const variable
// x = 200 // Will result in an error

// We can still manipulate arrays and objects using const
//const arr = [1, 2, 3, 4];
//arr.push(5);
//console.log(arr);

//const person = {
//  name: 'Brad',
//};
//person.name = 'John';
//person.email = 'brad@gmail.com';
//console.log(person);

// Declare multiple values at once
//let a, b, c;

//const d = 10,
 // e = 20,
 // f = 30;

//console.log(d);
//console.log(a);
// String
//const firstName = 'Sara';

// Number
//const age = 30;
//const temp = 98.9;

// Boolean
//const hasKids = true;

// Null
//const aptNumber = null;

// Undefined
// let score;
//const score = undefined;

// Symbol
//const id = Symbol('id');

// BigInt
//const n = 9007199254740991n;

// Reference Types

//const numbers = [1, 2, 3, 4];

//const person = {
  //name: 'Brad',
//};

//function sayHello() {
 // console.log('Hello');
//}

const output = sayHello;

console.log(output, typeof output);
// Value is stored in the stack
const name = 'John';
const age = 30;

// Reference is stored in the heap
const person = {
  name: 'Brad',
  age: 40,
};

let newName = name;
newName = 'Jonathan';

let newPerson = person;
newPerson.name = 'Bradley';

console.log(name, newName); // John, Jonathan
console.log(person, newPerson); // { name: 'Bradley', age: 40 }, { name: 'Bradley', age: 40 }

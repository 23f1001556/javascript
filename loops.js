/**
 * ===============================
 * Arrays, Loops, and Objects in JS
 * ===============================
 */

/** 
 * Example array of numbers
 * @type {number[]}
 */
let number = [1, 2, 3, 4, 5, 6];

/**
 * While loop iteration over an array
 */
let idx = 0;
let lengthOfArray = number.length;

console.log('While loop output:');
while (idx < lengthOfArray) {
    console.log(number[idx]);
    idx++;
}

/**
 * For loop iteration over an array
 */
console.log('For loop output:');
for (let i = 0; i < number.length; i++) {
    console.log(number[i]);
}

/**
 * Printing array elements in a single line (without newline)
 */
console.log('Printing in a single line:');
for (let i = 0; i < number.length; i++) {
    process.stdout.write(number[i].toString()); // prints 123456
}
console.log(); // just prints a newline

/**
 * Note: JavaScript does not differentiate between int and float.
 * All numbers are of type 'number'.
 */
let a = 5;       // integer
let b = 5.0;     // float (still number)
let c = 3.14;    // decimal
let d = -42;     // negative number

console.log('Data types of numbers:');
console.log(typeof a); // "number"
console.log(typeof b); // "number"
console.log(typeof c); // "number"
console.log(typeof d); // "number"

/**
 * Infinite while loop with break
 */
let sum = 0;
console.log('Infinite while loop with break:');
while (true) {
    console.log('loop');
    sum++;
    if (sum === 10) break;
}
console.log('Sum after loop:', sum); // 10

/**
 * Do-while loop
 * Runs at least once, then checks condition
 */
let i = 0;
console.log('Do-while loop output:');
do {
    console.log(i);
    i++;
} while (i < 10);

/**
 * While loop runs only if the condition is true
 * Do-while runs at least once regardless of condition
 */

/**
 * Example object
 */
const course = {
    name: 'js for beginners',
    duration: '3 hrs',
    section: 7
};

console.log('Accessing object properties directly:');
console.log(course.name);
console.log(course.duration);
console.log(course.section);

/**
 * Iterating over object values using for-in loop
 * Useful when object has many properties
 */
console.log('Iterating object values using for-in:');
for (const key in course) {
    console.log(course[key]);
}

/**
 * Iterating object keys using for-in
 */
console.log('Iterating object keys using for-in:');
for (const key in course) {
    console.log(key); // prints: 'name', 'duration', 'section'
}

/**
 * For-of loop
 * Iterates over iterable objects like arrays
 */
let nums = [1, 2, 3, 4, 5, 6, 7];
console.log('For-of loop output:');
for (let element of nums) {
    console.log(element);
}

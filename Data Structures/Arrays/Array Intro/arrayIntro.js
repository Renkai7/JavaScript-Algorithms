// Arrays are one of the most commonly-used data structures
// The elements of an array are stored in contiguous memory locations
// Arrays are of two types : Static and Dynamic
// Static arrays have fixed, pre-defined amount of memory that they can use, whereas in dynamic arrays this is flexible

// Look-up/Accses - O(1)
// Push/Pop - O(1)*
// Insert - O(n)
// Delete - O(n)

const strings = ["a", "b", "c", "d"];
const numbers = [1, 2, 3, 4, 5];

//push
strings.push("e"); // O(1)

//pop
strings.pop(); // O(1)
strings.pop(); // O(1)

//unshift
strings.unshift("x"); // O(n)

//splice
strings.splice(2, 0, "alien"); // O(n)

console.log(strings);

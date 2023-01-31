const boxes = [0, 1, 2, 3, 4, 5];

function logFirstTwoBoxes(boxes) {
	console.log(boxes[0]);
	console.log(boxes[1]);
}

logFirstTwoBoxes(boxes); // O(1) Constant - no loops

// Big O Exercise 1
function funChallenge(input) {
	let a = 10; // O(1)
	a = 50 + 3; // O(1)

	for (let i = 0; i < input.length; i++) {
		// O(n)
		anotherFunction(); // O(n)
		let stranger = true; // O(n)
		a++; // O(n)
	}
	return a; // O(1)
}
// Result
// Big O(3 + n) = O(n)

// Big O Exercise 2
function anotherFunChallenge(input) {
	let a = 5; // O(1)
	let b = 10; // O(1)
	let c = 50; // O(1)
	for (let i = 0; i < input; i++) {
		// O(n)
		let x = i + 1;
		let y = i + 2;
		let z = i + 3;
	}
	for (let j = 0; j < input; j++) {
		// O(n)
		let p = j * 2;
		let q = j * 2;
	}
	let whoAmI = "I don't know"; // O(1)
}
// Result
// Big O(4 + 5n) = O(n)

// Rules of Big O
// 1. Worst Case
// 2. Remove Constants
// 3. Different terms for inputs
// 4. Drop Non Dominants

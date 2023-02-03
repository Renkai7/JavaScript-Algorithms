// Log all pairs of array
const boxes = ["a", "b", "c", "d", "e"];

function logAllPairsOfArray(array) {
	for (let i = 0; i < array.length; i++) {
		// n*O(n)
		for (let j = 0; j < array.length; j++) {
			// n*O(n)
			console.log(array[i], array[j]); // n*n*O(1)
		}
	}
}

logAllPairsOfArray(boxes);

// Loops that are nested: O(n * n) = O(n^2)
// O(n*n + n*n + n*n*1) = O(3n^2)
// Ignore the constants: O(3n^2) = O(n^2)

function printAllNumbersThenAllPairSums(numbers) {
	console.log("these are the numbers:");
	numbers.forEach(function (number) {
		console.log(number);
	});

	console.log("and these are their sums:");
	numbers.forEach(function (firstNumber) {
		numbers.forEach(function (secondNumber) {
			console.log(firstNumber + secondNumber);
		});
	});
}

printAllNumbersThenAllPairSums([1, 2, 3, 4, 5]);

// O(n + n^2) = O(n^2)

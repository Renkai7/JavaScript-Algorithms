function reverse(str) {
	// check if input is a string
	if (!str || str.length < 2 || typeof str !== "string") {
		return "not a string";
	}

	const backwards = [];
	const totalItems = str.length - 1;
	for (let i = totalItems; i >= 0; i--) {
		backwards.push(str[i]);
	}

	console.log(backwards);

	return backwards.join("");
}

function reverse2(str) {
	return str.split("").reverse().join("");
}

const reverse3 = (str) => [...str].reverse().join("");

reverse3("Hi My name is Andrei");

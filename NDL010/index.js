function separateChar(str) {
	const vowel = "aiueo";
	let vowelList = [],
		constList = [];

	Array.from(str).forEach((char) => {
		if (vowel.includes(char)) {
			vowelList.push(char);
		} else if (char.match(/[a-z]/)) {
			constList.push(char);
		}
	});

	console.log("Vowel Characters :");
	console.log(vowelList.join(""));
	console.log("Consonant Characters :");
	console.log(constList.join(""));
	return;
}

const prompt = require("prompt-sync")({ sigint: true });
const userInput = prompt("Input one line of word (S) : ");
separateChar(userInput.toLocaleLowerCase());

function numberOfBusses(nFamilies, nMembers) {
	let countMem = 0,
		busses = 0;

	if (nMembers.length == nFamilies) {
		for (let num of nMembers) {
			countMem += Number(num);
		}
		if (countMem % 4 !== 0) {
			busses = Math.floor(countMem / 4);
			busses += 1;
		} else {
			busses = countMem / 4;
		}
		console.log("Minimum bus required is :", busses);
		return;
	} else {
		console.log("Input must be equal with count of family");
		return;
	}
}

const prompt = require("prompt-sync")({ sigint: true });
const nFamilies = prompt("Input the number of families : ");
const nMembers = prompt(
	"input the number of members in the family(separated by a space) : "
);

numberOfBusses(nFamilies, nMembers.split(" "));

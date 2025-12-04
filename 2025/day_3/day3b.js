// https://adventofcode.com/2025/day/3
const fs = require('fs');
let input = fs.readFileSync('./input3.txt', 'utf8');

let lines = input.split('\n').slice(0, -1); //split lines and drop last empty line

// lines = ["987654321111111", "811111111111119", "234234234234278", "818181911112111"]
// lines = ["999999999999999"]
// lines = ["234234234234278"]
// lines = ["3443334373333545324339252335233845533545245422755419334136447332543353734352333342352363164324383844"];
// lines = ["3443334373333545324339252335233845533545245422755419334136447332543353734352333342352363164324383844",
// 	"1222223242242124231221324122442244142124714212424435424317222323122242413232232443422232242244223233",
// 	"1424532124222222254421422423224222232253545224231125421422154425524445252421325221222444516522624512"];

const digits = "987654321".split(""), length = 12;

let sum = 0;
for (let line of lines) {
	let take = [];
	let idx = 0;

	while (take.length < length) {
		let max_idx = line.length - (length - take.length) + 1;
		let slice = line.slice(idx, max_idx);

		// find highest digit between idx and max_idx
		for (let d of digits) {
			let highest_idx = slice.indexOf(d);
			if (highest_idx != -1) {
				take.push(d);
				idx += highest_idx + 1;
				break;
			}
		}
	}

	let number = parseInt(take.join(""));
	sum += number;
	// console.log(number);
}
console.log(sum);
// 173300819005913
// https://adventofcode.com/2025/day/2
const fs = require('fs');
let input = fs.readFileSync('./input2.txt', 'utf8');

input = "11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124";

let sum = 0;
const ranges = input.split(",");
const output = ranges.map(v => {
	const range = v.split("-").map(v => parseInt(v));
	for (let i = range[0]; i <= range[1]; i++) {
		let value = i.toString();
		if (value.length % 2 == 1) continue;
		if (value.slice(0, value.length / 2) == value.slice(value.length / 2)) {
			sum += i;
		}
	}
});

console.log(sum);
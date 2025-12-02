// https://adventofcode.com/2025/day/2
const fs = require('fs');
let input = fs.readFileSync('./input2.txt', 'utf8');

// input = "11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124";

let sum = 0;
const ranges = input.split(",");

const is_invalid_id = (id) => {
	let max_seq_len = Math.floor(id.length / 2);
	for (let len = max_seq_len; len > 0; len--) {

		if (id.length % len === 0) {
			let first = id.slice(0, len), match = false;
			for (let offset = len; offset < id.length; offset += len) {
				let slice = id.slice(offset, offset + len);
				match = slice === first;
				if (!match) break;
			}
			if (match) return true;
		}
	}
};

ranges.forEach(v => {
	const range = v.split("-").map(v => parseInt(v));
	for (let i = range[0]; i <= range[1]; i++) {
		if (is_invalid_id(i.toString())) {
			sum += i;
		}
	}
});

console.log(sum);
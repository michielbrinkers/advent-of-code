const fs = require('fs');

const data = fs.readFileSync('./1.txt', 'utf8');
let lines = data.split('\n');
// lines = ["L1000"];
// lines = ["L68", "L30", "R48", "L5", "R60", "L55", "L1", "L99", "R14", "L82"];

const turns = lines.map((v) => {
	return { sign: (v[0] === "L" ? -1 : 1), shift: parseInt(v.slice(1)) };
});

let value = 50, zeros = 0;
turns.forEach((v) => {
	const { sign, shift } = v;
	const start_value = value;

	// Add full turns to zeros count
	zeros += Math.floor(shift / 100);
	// Add reminder to value
	value += sign * (shift % 100);

	if (value === 0) {
		zeros++;
	}
	else if (value < 0) {
		value += 100;
		// Don't count if we came from a zero.
		if (start_value !== 0) zeros++;
	}
	else if (value >= 100) {
		value -= 100;
		zeros++;
	}
});
console.log(zeros);
// 6770
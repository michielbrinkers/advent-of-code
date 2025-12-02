// https://adventofcode.com/2025/day/1
const fs = require('fs');
const input = fs.readFileSync('./input1.txt', 'utf8');

const turns = input.split('\n').map(v => (v[0] === "L" ? -1 : 1) * (parseInt(v.slice(1)) % 100));

let value = 50, zeros = 0;
turns.forEach((v) => {
	value += v;
	if (value < 0) value += 100;
	if (value > 99) value -= 100;
	if (value === 0) zeros++;
});
console.log(zeros);
// 1195

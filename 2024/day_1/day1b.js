// https://adventofcode.com/2024/day/1
const fs = require('fs');
const input = fs.readFileSync('./input1.txt', 'utf8');

let lines = input.split("\n").filter(v => !!v);
//lines = ["3   4", "4   3", "2   5", "1   3", "3   9", "3   3"];

const values = lines.map(v => v.split("   ").map(v => parseInt(v)));

const getColumns = (c) => {
	return values.map(v => v[c]).sort((a, b) => a - b);
};
const left = getColumns(0), right = getColumns(1);

const rightCounts = right.reduce((p, c) => { p[c] = p[c] ?? 0; p[c]++; return p; }, {});
const scores = left.map(v => (rightCounts[v] || 0) * v);
const sum = scores.reduce((p, c) => { return p + c; }, 0);

console.log(sum);
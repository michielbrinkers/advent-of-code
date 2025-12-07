// https://adventofcode.com/2025/day/6
const fs = require('fs');

const use_example = false;
const input = fs.readFileSync(`./${use_example ? "example" : "input"}6.txt`, 'utf8');

const lines = input.split("\n").filter(l => l != "");
let ops = lines.pop();

let offset = 0, columns = [];
while (offset < ops.length) {
	const op = ops.charAt(offset);
	const index = ops.slice(offset + 1).search(/\+|\*/);
	const len = index === -1 ? ops.length - offset : index;

	const vals = [];
	for (let i = 0; i < len; i++) {
		vals.push(lines.reduce((p, c) => { return p + c[offset + i]; }, ""));
	}

	columns.push({ op, vals: vals.map(v => parseInt(v)) });
	offset += len + 1;
}

const results = columns.map(col => {
	const op = col.op;
	return col.vals.reduce((p, c) => { return op == "+" ? p + c : p * c; }, op == "+" ? 0 : 1);
});

const sum = results.reduce((p, c) => { return p + c; }, 0);
console.log(sum);
//11950004808442
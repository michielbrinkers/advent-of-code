// https://adventofcode.com/2025/day/6
const fs = require('fs');

const use_example = true;
const input = fs.readFileSync(`./${use_example ? "example" : "input"}6.txt`, 'utf8');

const lines = input.split("\n").filter(l => l != "");

const ops = lines.pop().split("").filter(c => c != " ");
const rows = lines.map(v => v.split(" ").filter(c => c != "").map(v => parseInt(v)));
console.log(ops, rows);

const columns = Array(ops.length).fill([]);
for (let i = 0; i < ops.length; i++) {
	columns[i] = rows.map(v => v[i]);
}
console.log(columns);

const results = columns.map((c, i) => {
	let op = ops[i];
	return c.reduce((p, c) => { return op == "+" ? p + c : p * c; }, op == "+" ? 0 : 1);
});

console.log(results);

const sum = results.reduce((p, c) => { return p + c; }, 0);
console.log(sum);
//6299564383938
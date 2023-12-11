let file = "./day 8 test input 1";
file = "./day 8 input";

let input = require('fs').readFileSync(file, 'utf8').split("\n"),
    directions = input.shift(),
    path = input.slice(1);

directions = directions.replaceAll("L", 0).replaceAll("R", 1).split("").map(v=>parseInt(v));
path = path.map(v=>v.match(/(\w{3})\s=\s\((\w{3}),\s(\w{3})/).slice(1,4))
  .reduce((p,c)=>{p[c.shift()]=c; return p;}, {});

let step = 0, index = "AAA";
while (step < 50000 && index !== "ZZZ"){
  index = path[index][directions[step++ % directions.length]];
}
console.log(index, step);
let file = "./day 8 test input 2";
file = "./day 8 input";

let input = require('fs').readFileSync(file, 'utf8').split("\n"),
    directions = input.shift(),
    path = input.slice(1),
    now = Date.now();

directions = directions.replaceAll("L", 0).replaceAll("R", 1).split("").map(v=>parseInt(v));
path = path.map(v=>v.match(/(\w{3})\s=\s\((\w{3}),\s(\w{3})/).slice(1,4))
  .reduce((p,c)=>{p[c.shift()]=c; return p;}, {});

Object.keys(path).filter(v=>v[2]==="A").map(idx=>{
  let step = 0, index = idx;
  while (step < 100000 && index[2] !== "Z"){
    index = path[index][directions[step++ % directions.length]];
  }
  return {s_idx: idx, e_idx: index, step: step}
})
.map(v=>v.step/directions.length)
.reduce((p,c)=>p*c,1)*directions.length
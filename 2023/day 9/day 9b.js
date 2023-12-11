let file = "./day 9 test input";
file = "./day 9 input";

let input = require('fs').readFileSync(file, 'utf8').split("\n")
.map(v=>v.split(" ").map(v=>parseInt(v)) )
.map(v=>{
  let stack = [v[0]], seq = v;
  while ( seq.filter(v=>v!==0).length > 0 ){
    seq = seq.reduce((p,c,i,a)=>{if(i){ p.push(c-a[i-1]) }; return p; },[]);
    stack.push(seq[0])
  }
  return stack;
})
.map(v=>v.reverse().reduce((p,c,i,a)=> p = i===0 ? c : c - p, 0))
.reduce((p,c)=>p+c,0)

input;
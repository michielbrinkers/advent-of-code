let file = "./day 9 test input";
file = "./day 9 input";

let input = require('fs').readFileSync(file, 'utf8').split("\n")
.map(v=>v.split(" ").map(v=>parseInt(v)) )
.map(v=>{
  let stack = v.slice(-1), seq = v;
  //console.log("s:", v, v.length);
  while ( seq.filter(v=>v!==0).length > 0 ){
    seq = seq.reduce((p,c,i,a)=>{if(i){ p.push(c-a[i-1]) }; return p; },[]);
    stack.push(...seq.slice(-1))
    //console.log(seq.reduce((p,c)=>p+c,0), Math.max(...seq), seq, seq.length)
  }
  console.log(seq)
  //console.log(stack.reduce((p,c)=>p+c,0))
  return stack;
})
.map(v=>v.reduce((p,c)=>p+c,0))
.reduce((p,c)=>p+c,0)

input;
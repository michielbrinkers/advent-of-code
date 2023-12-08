let file = "./day 7 test input";
file = "./day 7 input";

const strength_map = {
  0: {undefined: 1},
  1: {5: 7, 4: 6, 3: 4, 2: 2},
  2: {3: 5, 2: 3}
},
  replacement_characters = [["A", "E"], ["K", "D"], ["Q", "C"], ["J", "B"], ["T", "A"]]; // Translate AKQJT to something we can sort

let input = require('fs').readFileSync(file, 'utf8')

input = replacement_characters.reduce((p,c)=>{ return p.replaceAll(c[0],c[1]);}, input).split("\n")
.map(v=>{ v = v.split(" "); return {hand: v[0], bid: parseInt(v[1])} })
.map(v=>{
  v.cards = v.hand.split("");
  v.counts = v.cards.reduce((p,c)=>{ p[c] = (p[c]||0)+1; return p; }, {});
  v.sorted = Object.values(v.counts).filter(v=>v!=1).sort((a,b)=>b-a),
  v.strength = strength_map[v.sorted.length][v.sorted[0]];
  return v;
}).sort((a,b)=> a.strength == b.strength ? a.hand > b.hand ? 1 : -1 : a.strength - b.strength )
.map((v,i)=>{
  v.rank = i + 1;
  v.value = v.rank * v.bid;
  return v;
})
input.reduce((p,c)=>p+c.value, 0)
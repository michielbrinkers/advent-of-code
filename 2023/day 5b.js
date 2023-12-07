let file = "./day 5 test input";
file = "./day 5 input";

let input = require('fs').readFileSync(file, 'utf8').split("\n"),
    seeds = input.shift().split(" ").slice(1).map(v=>parseInt(v)),
    key, maps = input.reduce((p,c,i)=>{
      if ( c === "" ) key = ""
      else if ( key === "" ) {
        key = p.length;
        p[key] = [];
      }
      else {
        p[key].push(c.split(" ").map(v=>parseInt(v)))
      }
      return p;
    }, []);

//seeds;
//maps;

Math.min(...maps.reduce((p,c)=>{
  return p.map(v=> {
      let map = c.filter(m=> v >= m[1] & v < m[1] + m[2] )[0];
      return map ? map[0] + v - map[1] : v;
  })
}, seeds))




const max_iteration = 2000000;
let ranges = seeds.reduce((p,c,i, a)=>{
  if ( i % 2 === 0 ){
    p.push({start: c, end: c + a[i+1], idx: c })
  }
  return p;
},[]),
    min = Number.MAX_SAFE_INTEGER,
    current = ranges.shift(),
    start = Date.now();

console.log(current);
// ranges.length = 0;

let parse = ()=>{
  let i, j = 0, now = Date.now();
  for ( i = current.idx; i<current.end && j < max_iteration; i++, j++ )
  {
    let val = maps.reduce((p,c)=>{
      let map = c.filter(m=> p >= m[1] & p < m[1] + m[2] )[0];
      return map ? map[0] + p - map[1] : p;
    }, i)
    if ( val < min ) min = val;
  }
  
  current.idx = i;
  console.log(`dt: ${Date.now() - now}, st: ${Date.now() - start}, ranges: ${ranges.length}, progress: ${Math.round(((current.idx-current.start)/(current.end-current.start))*100)}, [${current.idx}/${current.end}], min: ${min}`);
  if ( current.idx === current.end ){
    current = ranges.shift();
  }
  
  if ( current ){
    setTimeout(parse, 1);
  }
  else
  {
    console.log(`dt: ${Date.now() - now}, st: ${Date.now() - start}, min: ${min}, `);
  }
}
parse();
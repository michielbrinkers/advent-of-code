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

// 'seed-to-soil map:': [ [ 50, 98, 2 ], [ 52, 50, 48 ] ],
// destination source range
//Seed 79, soil 81, fertilizer 81, water 81, light 74, temperature 78, humidity 78, location 82.
//Seed 14, soil 14, fertilizer 53, water 49, light 42, temperature 42, humidity 43, location 43.
//S/eed 55, soil 57, fertilizer 57, water 53, light 46, temperature 82, humidity 82, location 86.
//Seed 13, soil 13, fertilizer 52, water 41, light 34, temperature 34, humidity 35, location 35.

Math.min(...maps.reduce((p,c)=>{
  return p.map(v=> {
      let map = c.filter(m=> v >= m[1] & v < m[1] + m[2] )[0];
      return map ? map[0] + v - map[1] : v;
  })
}, seeds))
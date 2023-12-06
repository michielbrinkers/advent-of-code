/*
--- Day 2: Cube Conundrum ---
As you walk, the Elf shows you a small bag and some cubes which are either red, green, or blue. 
Each time you play this game, he will hide a secret number of cubes of each color in the bag, 
and your goal is to figure out information about the number of cubes.

To get information, once a bag has been loaded with cubes, the Elf will reach into the bag, grab a handful of random cubes,
show them to you, and then put them back in the bag. He'll do this a few times per game.

You play several games and record the information from each game (your puzzle input). 
Each game is listed with its ID number (like the 11 in Game 11: ...) followed by a semicolon-separated list of subsets 
of cubes that were revealed from the bag (like 3 red, 5 green, 4 blue).

For example, the record of a few games might look like this:

Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green

In game 1, three sets of cubes are revealed from the bag (and then put back again). 
The first set is 3 blue cubes and 4 red cubes; the second set is 1 red cube, 2 green cubes, and 6 blue cubes; 
the third set is only 2 green cubes.

The Elf would first like to know which games would have been possible if the bag 
contained only 12 red cubes, 13 green cubes, and 14 blue cubes?

In the example above, games 1, 2, and 5 would have been possible if the bag had been loaded with that configuration. 
However, game 3 would have been impossible because at one point the Elf showed you 20 red cubes at once; 
similarly, game 4 would also have been impossible because the Elf showed you 15 blue cubes at once. 
If you add up the IDs of the games that would have been possible, you get 8.

Determine which games would have been possible if the bag had been loaded with only 12 red cubes, 13 green cubes, and 14 blue cubes.
What is the sum of the IDs of those games?
*/

/**/
let games = ["Game 1: 1 red, 5 blue, 10 green; 5 green, 6 blue, 12 red; 4 red, 10 blue, 4 green",
"Game 2: 2 green, 1 blue; 1 red, 2 green; 3 red, 1 blue; 2 blue, 1 green, 8 red; 1 green, 10 red; 10 red",
"Game 3: 14 red, 9 green, 5 blue; 2 green, 5 red, 7 blue; 1 blue, 14 green; 6 green, 2 red",
"Game 4: 2 green, 3 blue, 9 red; 1 red, 1 green; 4 red, 4 blue; 1 blue, 19 red; 7 red",
"Game 5: 1 green, 10 blue, 4 red; 15 green, 4 red, 5 blue; 14 blue, 14 green, 2 red; 15 green, 7 blue, 1 red; 2 red, 9 green, 17 blue",
"Game 6: 2 red, 2 blue, 4 green; 3 red, 13 blue, 9 green; 1 red, 14 blue, 3 green; 9 green, 11 blue, 3 red; 6 blue, 2 green",
"Game 7: 11 green, 6 blue, 6 red; 2 blue, 3 red, 9 green; 3 red, 5 blue, 5 green; 6 red, 5 green, 3 blue; 9 red, 6 blue",
"Game 8: 11 blue, 3 red; 3 blue, 2 green, 13 red; 11 red, 7 blue, 1 green",
"Game 9: 2 green, 1 blue, 3 red; 9 green, 4 red; 7 red, 5 green; 4 red, 1 blue; 11 green, 16 red; 2 red, 6 green",
"Game 10: 1 red, 4 blue, 1 green; 7 green, 3 red, 1 blue; 5 blue, 7 red",
"Game 11: 1 red, 11 blue, 7 green; 6 green, 2 blue, 12 red; 8 blue, 7 green, 5 red",
"Game 12: 11 red, 5 blue, 4 green; 8 blue, 15 red, 5 green; 9 blue, 11 green, 1 red; 6 blue, 3 red, 9 green; 5 red, 2 blue, 1 green",
"Game 13: 5 red, 2 blue, 7 green; 1 red, 8 green; 6 green, 4 red",
"Game 14: 1 green, 2 blue, 2 red; 5 red, 1 blue, 2 green; 4 red, 1 blue",
"Game 15: 6 green, 1 red; 4 red, 5 blue, 6 green; 1 green, 3 blue, 4 red; 5 green, 8 red",
"Game 16: 16 red, 10 blue, 3 green; 9 blue, 13 green, 5 red; 14 green, 2 blue, 2 red; 3 blue, 1 green, 1 red; 2 green, 4 blue, 8 red; 1 blue, 17 red, 9 green",
"Game 17: 6 red, 1 blue, 15 green; 5 red, 5 green; 16 green, 5 red, 4 blue; 5 red, 8 green, 2 blue; 12 blue, 13 green, 3 red",
"Game 18: 17 green, 5 blue; 2 green, 14 red; 10 green, 9 red, 10 blue; 6 red, 11 green, 6 blue",
"Game 19: 12 green, 2 blue, 4 red; 1 blue, 16 red; 8 green, 2 blue, 14 red",
"Game 20: 1 red, 4 green; 5 red, 4 green; 4 green, 1 red; 5 red, 1 blue, 3 green",
"Game 21: 15 red, 5 blue, 12 green; 10 green, 12 red, 1 blue; 9 red, 14 blue, 1 green; 2 green, 13 red, 7 blue; 12 blue, 11 red, 12 green",
"Game 22: 8 blue, 3 red; 2 green, 4 red, 3 blue; 1 blue, 2 red, 1 green; 13 blue, 4 red, 2 green",
"Game 23: 3 blue, 5 green, 3 red; 4 green, 9 red; 3 red, 2 green; 2 blue, 3 green, 2 red; 2 green, 3 blue, 5 red",
"Game 24: 15 red, 1 green; 1 blue, 14 red, 1 green; 5 green, 14 red; 4 blue, 1 red, 3 green; 1 blue, 4 green, 3 red",
"Game 25: 3 green, 3 red; 8 green, 1 red, 2 blue; 1 blue, 11 green",
"Game 26: 3 red, 12 green, 15 blue; 15 blue, 2 red, 2 green; 2 red, 18 blue; 3 red, 14 blue, 7 green",
"Game 27: 6 green, 15 red, 10 blue; 6 green, 7 red, 4 blue; 14 blue, 12 red, 7 green; 8 red, 14 blue, 17 green; 15 red, 14 blue, 4 green; 5 red, 1 blue, 5 green",
"Game 28: 5 blue, 3 green; 3 green, 2 blue, 4 red; 8 green, 6 red; 4 red, 2 green, 5 blue; 1 blue, 5 red, 5 green; 1 red, 4 blue, 9 green",
"Game 29: 4 blue, 9 red, 12 green; 2 red, 14 blue, 13 green; 2 red, 10 green; 5 green, 14 blue, 9 red",
"Game 30: 3 red, 3 blue, 13 green; 2 blue, 10 green, 4 red; 2 blue, 5 green, 4 red",
"Game 31: 13 green, 3 red, 8 blue; 15 green; 4 blue, 1 red; 8 red, 4 green, 2 blue; 18 blue, 4 red, 9 green",
"Game 32: 3 blue, 8 red, 16 green; 2 blue, 13 red, 18 green; 8 red, 9 green",
"Game 33: 1 red, 7 green, 3 blue; 10 green, 10 red, 10 blue; 5 blue, 8 red, 14 green; 10 blue, 5 green, 2 red; 10 green, 10 red, 16 blue",
"Game 34: 3 blue, 1 green, 6 red; 2 blue, 5 red; 3 blue, 2 red, 9 green",
"Game 35: 5 blue, 2 green, 1 red; 7 blue, 3 red, 7 green; 13 green, 4 blue, 3 red; 1 blue, 9 green; 1 red, 13 green, 3 blue",
"Game 36: 1 red, 1 blue, 13 green; 1 green; 2 blue, 16 green; 3 blue, 17 green, 1 red; 4 blue, 1 red; 5 blue, 1 red",
"Game 37: 5 red, 8 green, 1 blue; 16 blue, 2 red; 7 blue, 7 red, 6 green; 2 blue, 6 green, 4 red; 4 green, 3 red, 5 blue; 3 green, 9 blue, 3 red",
"Game 38: 7 green, 3 red, 2 blue; 1 blue, 1 green, 1 red; 15 blue; 4 red, 11 blue; 1 red, 1 green, 2 blue",
"Game 39: 20 red, 4 blue, 7 green; 11 red, 16 green, 7 blue; 7 red, 15 green, 11 blue; 10 red, 9 blue, 13 green; 12 red, 12 blue, 17 green",
"Game 40: 5 blue, 4 green; 1 red, 1 blue, 9 green; 9 green, 6 blue, 1 red; 6 blue, 4 green, 1 red",
"Game 41: 2 blue; 2 blue, 1 green; 4 green, 2 red, 1 blue",
"Game 42: 7 blue, 12 green, 1 red; 8 blue, 3 green, 1 red; 3 red, 1 blue, 10 green; 7 green, 15 blue",
"Game 43: 3 blue, 19 green, 7 red; 14 blue, 8 green, 8 red; 2 red, 1 green, 5 blue; 8 red, 8 blue, 17 green; 1 blue, 10 red, 18 green; 4 green, 11 red, 8 blue",
"Game 44: 12 blue, 4 green; 9 blue, 1 green, 2 red; 2 red, 3 blue, 3 green; 1 red, 4 green, 14 blue",
"Game 45: 2 red, 1 blue, 7 green; 5 red, 5 green, 1 blue; 2 blue, 6 red, 5 green; 3 green, 2 blue; 6 red, 1 blue; 5 green, 4 red, 1 blue",
"Game 46: 2 blue, 3 green, 2 red; 1 blue, 4 green, 5 red; 4 green, 3 blue, 6 red",
"Game 47: 10 green, 12 blue; 3 red, 8 blue, 8 green; 1 green, 10 blue, 2 red; 4 blue, 4 green",
"Game 48: 5 green, 11 blue, 4 red; 2 blue, 5 green, 7 red; 16 red, 2 green, 5 blue; 2 red, 1 green, 10 blue",
"Game 49: 11 blue, 5 red, 7 green; 15 green, 9 blue; 3 red, 4 green, 6 blue; 2 green, 14 blue, 6 red; 2 red, 11 green, 4 blue; 12 blue, 10 green",
"Game 50: 1 red, 13 blue, 4 green; 2 green, 1 red, 6 blue; 6 green, 14 blue",
"Game 51: 5 blue, 9 green, 1 red; 17 blue, 1 red; 11 green, 13 blue; 7 green, 13 blue; 2 blue, 4 green; 7 blue, 5 green",
"Game 52: 17 green, 3 blue; 15 green, 5 blue, 1 red; 12 green, 1 red, 4 blue; 1 red, 10 blue, 16 green; 12 green, 6 blue, 1 red",
"Game 53: 4 red; 2 green, 5 blue, 5 red; 3 red, 5 blue",
"Game 54: 5 red, 1 green; 16 green, 14 blue, 10 red; 1 red, 15 blue, 15 green",
"Game 55: 5 green, 14 red; 9 red, 6 green, 1 blue; 9 green, 4 red, 1 blue; 3 green, 1 blue, 7 red; 1 blue, 1 red, 2 green",
"Game 56: 2 red, 2 blue; 8 red, 5 blue; 6 blue, 1 green, 4 red",
"Game 57: 1 blue, 1 red; 2 green, 8 red; 7 red, 2 green; 2 blue, 5 green, 5 red",
"Game 58: 18 blue, 1 red, 6 green; 1 red, 8 green; 5 blue, 7 green; 4 blue, 2 green; 8 blue, 4 green",
"Game 59: 10 red, 3 blue; 10 red, 3 green, 4 blue; 3 blue, 1 green; 4 red, 3 green, 6 blue; 5 red, 3 green, 5 blue",
"Game 60: 8 red, 7 green; 11 green, 14 red; 11 red, 1 blue, 7 green; 1 blue, 18 red; 10 red, 12 green, 1 blue",
"Game 61: 11 blue, 6 green, 1 red; 6 red, 12 green, 6 blue; 14 blue, 6 red; 11 blue, 3 red, 6 green",
"Game 62: 7 blue, 4 green, 5 red; 2 green, 4 red, 7 blue; 4 red; 1 blue, 5 red",
"Game 63: 7 green, 10 blue, 11 red; 13 red, 19 blue; 11 green, 11 red; 8 green, 18 blue, 4 red; 5 green, 19 blue, 12 red; 10 green, 6 blue, 2 red",
"Game 64: 1 green, 5 red; 4 green, 13 blue, 6 red; 5 green, 2 red, 13 blue",
"Game 65: 1 blue, 2 green, 5 red; 13 red, 4 green, 3 blue; 8 red; 3 green, 1 red; 6 red, 4 green, 2 blue",
"Game 66: 2 green, 15 red; 3 green, 12 red; 2 blue, 2 green, 4 red; 4 blue, 8 red; 1 green, 4 blue, 14 red; 2 blue, 2 green, 6 red",
"Game 67: 3 green, 5 blue, 1 red; 5 green, 6 red, 3 blue; 13 red, 9 green, 8 blue; 11 green, 15 red, 3 blue; 16 red, 8 blue, 17 green; 8 green, 5 red",
"Game 68: 1 red, 3 green; 1 blue; 2 green; 3 red, 1 blue; 1 green, 3 red, 2 blue",
"Game 69: 2 red, 13 green, 3 blue; 3 red, 2 blue, 7 green; 2 blue, 3 red, 9 green; 7 blue, 1 red, 4 green; 6 red, 14 blue, 2 green; 1 green, 2 red, 14 blue",
"Game 70: 5 blue, 2 green, 1 red; 1 blue, 6 red, 4 green; 4 red, 2 blue, 6 green; 4 red, 2 blue, 8 green; 4 green, 1 blue",
"Game 71: 7 green, 3 blue; 2 red, 4 green, 6 blue; 2 red, 5 blue; 1 blue, 5 green",
"Game 72: 20 green, 4 red; 13 green, 12 blue, 7 red; 15 blue, 16 red, 7 green; 14 green, 13 red, 2 blue; 11 green, 6 red, 8 blue; 10 green, 13 red",
"Game 73: 10 blue, 13 green, 3 red; 3 red, 16 green, 7 blue; 5 blue, 6 green, 2 red; 4 green, 1 blue, 2 red",
"Game 74: 2 green, 7 red, 1 blue; 8 red, 10 green; 5 red, 5 blue",
"Game 75: 4 green, 13 blue, 5 red; 1 red, 2 green, 3 blue; 2 red, 7 green, 14 blue; 1 red, 2 green, 2 blue; 13 blue, 5 red",
"Game 76: 10 blue, 3 green, 6 red; 12 blue, 1 red, 3 green; 13 green, 16 blue, 4 red",
"Game 77: 7 green, 4 red, 4 blue; 6 red; 6 red, 4 green, 9 blue; 1 red, 2 blue",
"Game 78: 3 blue, 11 green; 12 green; 10 green, 4 red, 6 blue",
"Game 79: 8 green, 12 red, 9 blue; 4 green, 6 blue, 1 red; 9 blue, 4 green; 6 blue, 7 green, 11 red; 11 blue, 18 red, 7 green; 4 green, 11 red, 1 blue",
"Game 80: 9 green, 1 red, 7 blue; 3 red, 15 blue, 9 green; 3 blue, 1 red, 5 green; 10 red, 15 blue, 3 green",
"Game 81: 2 red, 3 blue, 2 green; 1 green, 4 blue, 5 red; 7 red, 8 blue; 2 green, 2 blue, 8 red",
"Game 82: 6 blue, 4 red, 1 green; 1 green, 4 red, 9 blue; 3 green, 8 blue; 3 red, 3 blue; 8 blue, 2 green",
"Game 83: 2 red, 1 green, 3 blue; 6 blue, 3 red; 2 red, 1 green, 4 blue",
"Game 84: 1 blue, 10 green; 13 red, 8 green, 4 blue; 7 red, 1 green, 4 blue",
"Game 85: 7 red, 7 green, 1 blue; 1 red, 5 green, 2 blue; 16 red, 10 green, 4 blue; 1 blue, 12 green, 3 red",
"Game 86: 15 red, 7 blue, 1 green; 19 blue, 3 red; 2 blue, 1 green, 4 red",
"Game 87: 9 green; 5 red, 8 green, 1 blue; 1 blue, 5 red, 7 green",
"Game 88: 16 red, 3 green, 2 blue; 1 blue, 6 green, 14 red; 12 blue, 17 red; 11 blue, 13 red, 5 green; 2 blue, 20 red, 3 green; 9 red, 8 blue, 2 green",
"Game 89: 7 green, 3 blue, 6 red; 4 green, 7 blue, 5 red; 6 green, 3 red, 7 blue; 5 green, 3 red, 8 blue; 6 red, 9 blue, 11 green",
"Game 90: 11 green, 4 red, 5 blue; 7 green, 2 red, 1 blue; 4 red, 1 green, 8 blue",
"Game 91: 2 green, 7 red, 5 blue; 18 red, 3 green, 3 blue; 6 red, 2 blue, 5 green; 6 red, 5 blue, 3 green; 7 green, 6 blue, 8 red",
"Game 92: 4 red; 3 red, 5 green, 1 blue; 3 red, 2 blue, 2 green",
"Game 93: 2 green, 15 red, 10 blue; 3 red, 8 blue; 20 red, 5 blue, 2 green; 11 blue, 2 green, 20 red; 7 blue, 18 red",
"Game 94: 1 red, 4 green, 2 blue; 7 green, 9 red, 2 blue; 3 red, 3 green, 1 blue; 8 red, 2 blue, 2 green; 2 red, 8 green, 2 blue; 5 green, 8 red",
"Game 95: 2 blue, 4 red; 1 blue, 3 green, 4 red; 5 green, 3 red, 4 blue; 1 green, 4 red, 6 blue",
"Game 96: 1 green, 1 blue, 2 red; 1 red, 13 blue, 4 green; 3 red, 14 blue, 15 green",
"Game 97: 3 green, 7 red; 2 red, 3 green, 1 blue; 4 green, 1 blue, 4 red; 1 red",
"Game 98: 9 blue, 8 red, 3 green; 10 blue, 3 red; 7 blue, 2 green, 7 red; 4 red, 11 blue, 3 green; 8 red, 9 blue, 2 green",
"Game 99: 5 green, 8 blue; 3 blue, 4 red, 16 green; 1 green, 5 red, 6 blue",
"Game 100: 6 blue, 9 green; 3 green, 6 blue; 5 blue, 1 red"];
/** /

games = ["Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green",
"Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue",
"Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red",
"Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red",
"Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green"]
/**/

let regexes = [/(\d+)\sred/, /(\d+)\sgreen/, /(\d+)\sblue/]

let get_color_count = (text, regex_idx)=> {
  return  parseInt((text.match(regexes[regex_idx]) || [0,0])[1]);
}

games.map((v, i)=>{
  let tries = v.replace(/Game (\d+):/, "").split(";")
  .map((v)=>{ return {r: get_color_count(v,0), g:  get_color_count(v,1), b: get_color_count(v,2) } });
  return {idx: i+1, tries: tries}
})
.filter(v=>{
   return !v.tries.filter(t=>t.r > 12 || t.g > 13 || t.b > 14).length
})
.reduce((p,c)=> p + c.idx, 0)

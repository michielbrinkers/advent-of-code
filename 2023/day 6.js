[
  //{time: 7, distance: 9}, {time: 15, distance: 40}, {time: 30, distance: 200},
  {time: 62, distance: 644}, {time: 73, distance: 1023}, {time: 75, distance: 1240}, {time: 65, distance: 1023}
].map(input=> Array(input.time).fill(0).map((v,i)=> (input.time-i)*i ).filter(v=>v>input.distance).length ).reduce((p,c)=>p*c,1)

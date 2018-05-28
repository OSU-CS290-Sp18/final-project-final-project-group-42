//function
function mixer(mixLevel, s1, s2){
  var mix = [];
  var y = 0;
  var z = 0;
  var i = 0;
  for(var x = 0; x < s1.length + s2.length;){
    if(i < mixLevel){
      if(s1[y] != undefined){
        mix[x] = s1[y];
        x++;
      }
      y++;
      i++;
    }
    if(i >=  mixLevel && i < 2*mixLevel){
      if(s2[z] != undefined){
        mix[x] = s2[z];
        x++;
      }
      z++;
      i++;
    }else if(i >= 2*mixLevel){
      i = 0;
    }
  }
  return mix;
}


//node testing
var fs = require('fs');
var s1 = [
  {
    title: "All Star",
    artist: "Smash Mouth"
  },
  {
    title: "Africa",
    artist: "Toto"
  },
  {
    title: "Who Let the Dogs Out",
    artist: "The Baha Men"
  },
  {
    title: "Gormet Race",
    artist: "Kirbert"
  },
  {
    title: "Tots",
    artist: "Mots"
  },
  {
    title: "TUBTHUMPING",
    artist: "CHUBAWUMBA"
  }
];
var s2 =[
  {
    title: "Arms Wide Open",
    artist: "Creed"
  },
  {
    title: "How You Remind Me",
    artist: "Nickleback"
  },
  {
    title: "The Reason",
    artist: "Hoobastak"
  },
  {
    title: "Iris",
    artist: "The Goo Goo Dolls"
  },
  {
    title: "Nookie",
    artist: "Limp Biskit"
  },
  {
    title: "All Star",
    artist: "Guy Feiri"
  },
  {
     "title": "Fidle Sticks",
     "artist": "none"
  }
];

console.log("s1:\n", s1);
console.log("s2:\n", s2);

console.log("\nMixes");

mix = mixer(1, s1, s2);
console.log("mix 1:\n", mix);

mix = mixer(2, s1, s2);
console.log("mix 2:\n", mix);

mix = mixer(3, s1, s2);
console.log("mix 3:\n", mix);

mix = mixer(4, s1, s2);
console.log("mix 4:\n", mix);

const favouriteSongs = [
  {
    songName: "Say my name",
    artist: "Destiny's Child",
    genre: "R&B",
    released: 1999,
  },
  {
    songName: "How Will I Know",
    artist: "Whitney Houston",
    genre: "Pop",
    released: 1985,
  },
  {
    songName: "I'll Follow You",
    artist: "Shinedown",
    genre: "Rock",
    released: 2013,
  },
  {
    songName: "Plug in Baby",
    artist: "Muse",
    genre: "Rock",
    released: 2001,
  },
  {
    songName: "Undisclosed Desires",
    artist: "Muse",
    genre: "Rock",
    released: 2009,
  },
  {
    songName: "Lately",
    artist: "Stevie Wonder",
    genre: "R&B",
    released: 1981,
  },
  {
    songName: "Heaven Is 10 Zillion Light Years Away",
    artist: "Stevie Wonder",
    genre: "R&B",
    released: 1974,
  },
  {
    songName: "Even Flow",
    artist: "Pearl Jam",
    genre: "Rock",
    released: 1991,
  },
  {
    songName: "Better Man",
    artist: "Pearl Jam",
    genre: "Rock",
    released: 1994,
  },
  {
    songName: "November Rain",
    artist: "Guns N' Roses",
    genre: "Rock",
    released: 1991,
  },
  {
    songName: "Free Bird",
    artist: "Lynyrd Skynyrd",
    genre: "Rock",
    released: 1973,
  },
  {
    songName: "Europa",
    artist: "Santana",
    genre: "Rock",
    released: 1976,
  },
  {
    songName: "Wish You Were Here",
    artist: "Pink Floyd",
    genre: "Rock",
    released: 1981,
  },
  {
    songName: "The Message",
    artist: "Nas",
    genre: "Hip Hop",
    released: 1996,
  },
  {
    songName: "Affirmative Action",
    artist: "Nas",
    genre: "Hip Hop",
    released: 1996,
  },
  {
    songName: "Good Ol Love",
    artist: "Masta Ace",
    genre: "Hip Hop",
    released: 1994,
  },
  {
    songName: "Lampshade",
    artist: "Kashmir",
    genre: "Rock",
    released: 1999,
  },
  {
    songName: "Closer",
    artist: "Kings of Leon",
    genre: "Rock",
    released: 2008,
  },
  {
    songName: "Stay With You",
    artist: "John Legend",
    genre: "R&B",
    released: 2004,
  },
  {
    songName: "Sound of Madness",
    artist: "Shinedown",
    genre: "Rock",
    released: 2008,
  },
  {
    songName: "MONSTERS",
    artist: "Shinedown",
    genre: "Rock",
    released: 2018,
  },
];

console.log(favouriteSongs);

const template = document.querySelector("template").content;
const copy = template.cloneNode(true);

favouriteSongs.forEach((a) => {
  copy.querySelector("p span:nth-child(2)").textContent = favouriteSongs.songName;
  copy.querySelector("p:nth-child(2) span:nth-child(2)").textContent = favouriteSongs.artist;
  copy.querySelector("p:nth-child(3) span:nth-child(2)").textContent = favouriteSongs.genre;
  copy.querySelector("p:nth-child(4) span:nth-child(2)").textContent = favouriteSongs.released;
  const parent = document.querySelector("main");
  parent.appendChild(copy);
});

// for each object in the array do these things

// function displaySongs() {
//   favouriteSongs.forEach((song) => {
//     song;
//     //skal jeg gøre noget ;
//   });
// }

/* old exercise
const template = document.querySelector("#mytemplate").content;
const myClone = template.cloneNode(true);

myClone.querySelector("h3").textContent = "nu er h3 ændret til dette";
myClone.querySelector("p").textContent = "paragrafen indeholder nu denne text";

const parentElement = document.querySelector("main");

parentElement.appendChild(myClone);
*/

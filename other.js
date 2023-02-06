const favouriteSongs = [
  {
    songName: "Lately",
    artist: "Stevie Wonder",
    genre: "R&B",
    released: 1981,
  },
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
const template = document.querySelector("template").content;
const parent = document.querySelector("main");

favouriteSongs.forEach((song) => {
  const clone = template.cloneNode(true);
  clone.querySelector("p span:nth-child(2)").textContent = song.songName;
  clone.querySelector("p:nth-child(2) span:nth-child(2)").textContent = song.artist;
  clone.querySelector("p:nth-child(3) span:nth-child(2)").textContent = song.genre;
  clone.querySelector("p:nth-child(4) span:nth-child(2)").textContent = song.released;

  parent.appendChild(clone);
});

/* for(const song of favouriteSongs) {
    const clone = template.cloneNode(true);
    clone.querySelector("p span:nth-child(2)").textContent = song.songName;
  clone.querySelector("p:nth-child(2) span:nth-child(2)").textContent = song.artist;
  clone.querySelector("p:nth-child(3) span:nth-child(2)").textContent = song.genre;
  clone.querySelector("p:nth-child(4) span:nth-child(2)").textContent = song.released;

  parent.appendChild(clone);
} */

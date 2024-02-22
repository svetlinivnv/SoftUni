function songs(inputArr) {
  let numberOfSongs = inputArr.shift();
  let typeList = inputArr.pop();

  class Song {
    constructor(type, name, time) {
      this.type = type;
      this.name = name;
      this.time = time;
    }
  }

  let songsToList = [];

  for (let currSong of inputArr) {
    let [type, name, time] = currSong.split("_");
    let song = new Song(type, name, time);
    if (song.type === typeList) {
      songsToList.push(song.name);
    } else if (typeList === "all") {
      songsToList.push(song.name);
    }
  }
  console.log(songsToList.join("\n"));
}

// songs([3,

//     'favourite_DownTown_3:14',

//     'favourite_Kiss_4:16',

//     'favourite_Smooth Criminal_4:01',

//     'favourite']);

// songs([
//   4,

//   "favourite_DownTown_3:14",

//   "listenLater_Andalouse_3:24",

//   "favourite_In To The Night_3:58",

//   "favourite_Live It Up_3:48",

//   "listenLater",
// ]);

songs([3, "like_Replay_3:15", "ban_Photoshop_3:48", "all"]);

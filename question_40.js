function make_album(artistName, albumTitle, tracks) {
  this.albumTitle = albumTitle;
  this.artistName = artistName;
  if (tracks) {
    this.tracks = tracks;
  }
}
console.log(new make_album("Atif Aslam", "Teri Yadein"));
console.log(new make_album("Nusrat Fateh", "Maikhana", 15));
console.log(new make_album("Ap Dhillon", "Woh Noor"));

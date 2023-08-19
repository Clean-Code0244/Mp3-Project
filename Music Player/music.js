class Music {
  constructor(title, singer, img, file) {
    this.title = title;
    this.singer = singer;
    this.img = img;
    this.file = file;
  }

  getName() {
    return this.title + " - " + this.singer;
  }
}

const musicList = [
  new Music(
    "Tanrım Reva Mı",
    "Semicenk",
    "_semicenk.jpg",
    "tanrım_reva_mı.mp3"
  ),
  new Music(
    "Canın Sağolsun",
    "Semicenk & Rast",
    "semicenkrast.jpg",
    "canın_sağolsun.mp3"
  ),
  new Music("Kördüğüm", "Sefo & Jako", "sefojako.jpg", "kordugum.mp3"),
];

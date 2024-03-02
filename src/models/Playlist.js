import {doubleCircularLinkedList } from "../dependecies.js";
import {Music} from "../models/Music.js";

export class Playlist{
    constructor() {
        this.songs = doubleCircularLinkedList;
    }
    addSong(title) {
        const song = new Music(title);
        this.songs.append(song);
      };
    playSong(audio) {
      play.classList.add("play");
      const icon = play.querySelector("i.fas");
      audio.play();
    }
    pauseSong(audio) {
      play.classList.remove("play");
      const icon = play.querySelector("i.fas");
      icon.classList.remove("fa-pause");
      icon.classList.add("fa-play");
      audio.pause();
    }
     timeSong(audio, element) {
      const totalSeconds = Math.round(audio);
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60; 
      element.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`;
    } 
}
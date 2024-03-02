import {doubleCircularLinkedList } from "./dependecies.js";
import {playlist } from "./dependecies.js";

const audio = document.querySelector("audio");
const titlesong = document.querySelector("h1");

let currentNode =null;
let nextNode=null;
let prevNode= null;

playlist.addSong("breezeblocks x take a slice(128 kbps)")
playlist.addSong("ThxSoMch - SPIT IN MY FACE! (128 kbps)")
playlist.addSong("Gorillaz - Feel Good Inc.(128 kbps)")
console.log(playlist)

const size = doubleCircularLinkedList.size;
const title = new Array  (size) ;

for(let i=0;i<size;i++){
   let a= doubleCircularLinkedList.getItem(i).title;
   title[i]=a;
}
audio.src = "../src/audio/"+playlist.songs.head.element.title+".mp3";
audio.addEventListener("loadedmetadata", () => {
    playlist.timeSong(audio.duration, current_audio);
})

const playsong = document.getElementById("play")
playsong.addEventListener("click", function playMusic(){
    playlist.playSong(audio);
    currentNode=playlist.songs.head;
    titlesong.textContent=currentNode.element.title
})

const pauseSong = document.getElementById("pause")
pauseSong.addEventListener("click", function pauseMusic(){
    playlist.pauseSong(audio)
})
const nextSong = document.getElementById("next")
nextSong.addEventListener("click", function playMusic(){
    nextNode = currentNode.getNext();
    currentNode=nextNode;
    titlesong.textContent=currentNode.element.title
    audio.src = "../src/audio/"+currentNode.element.title+".mp3";
    audio.addEventListener("loadedmetadata", () => {
    playlist.timeSong(audio.duration, current_audio);
    })
      playlist.playSong(audio);
})
const prevSong = document.getElementById("prev")
prevSong.addEventListener("click", function playMusic(){
    prevNode=currentNode.getPrev()
    currentNode=prevNode;
    titlesong.textContent=currentNode.element.title
    audio.src = "../src/audio/"+currentNode.element.title+".mp3";
    audio.addEventListener("loadedmetadata", () => {
    playlist.timeSong(audio.duration, current_audio);
    })
      playlist.playSong(audio);
})


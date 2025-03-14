import {artistArray} from "../../Frontend/src/assets/database/artists.js";
import {songsArray} from "../../Frontend/src/assets/database/songs.js";
import { db } from "./connect.js";

const newArtistArray = artistArray.map((currentArtistObj) => {
    const newArtistObj = { ...currentArtistObj };
    delete newArtistObj.id;
    return newArtistObj;
});

const newSongsArray = songsArray.map((currentSongsObj) => {
    const newSongsObj = { ...currentSongsObj };
    delete newSongsObj.id;
    return newSongsObj;
});

const responseArtists = await db.collection("artists").insertMany(newArtistArray);

const responseSongs = await db.collection("songs").insertMany(newSongsArray);

console.log(responseArtists);
console.log(responseSongs);
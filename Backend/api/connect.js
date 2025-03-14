import {MongoClient} from "mongodb";

const URI = 
    "mongodb+srv://viniciusmlopes:BVk5AlKAtiETOGnh@cluster0.uwjqy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const client = new MongoClient(URI);

export const db = client.db("spotifyAula");

//const songCollection = await db.collection("songs").find({}).toArray();
//console.log(songCollection);

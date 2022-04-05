import * as firebase from "firebase";
const config = {
  apiKey: "AIzaSyDj4D8-F-u4QjFdPO3ZrWLLJkOHJE5GBhw",
  authDomain: "movieposts-ec414.firebaseapp.com",
  databaseURL: "https://movieposts-ec414.firebaseio.com",
  projectId: "movieposts-ec414",
  storageBucket: "movieposts-ec414.appspot.com",
  messagingSenderId: "29953032394",
  appId: "1:29953032394:web:f1e2a239083f16c5ec3433",
  measurementId: "G-BS4GETL7G8",
};

firebase.initializeApp(config);

const database = firebase.database();

export { database };

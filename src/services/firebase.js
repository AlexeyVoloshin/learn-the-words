import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
	apiKey: "AIzaSyA0615aNrS8JRJvXnfyjFPtGmChZXk8NTo",
	authDomain: "learn-the-words-1470c.firebaseapp.com",
	databaseURL: "https://learn-the-words-1470c-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "learn-the-words-1470c",
	storageBucket: "learn-the-words-1470c.appspot.com",
	messagingSenderId: "722458887150",
	appId: "1:722458887150:web:c760978a7364e67ded44ff"
  };

  firebase.initializeApp(firebaseConfig);

  export const fire = firebase;
  const database = firebase.database();

  export default database;
import * as firebase from 'firebase'



    // Initialize Firebase
    var config = {
    apiKey: "AIzaSyAR8HFKv5XrQz_UdS-I4s7udhLVlyvdCPo",
    authDomain: "diary-15619.firebaseapp.com",
    databaseURL: "https://diary-15619.firebaseio.com",
    projectId: "diary-15619",
    storageBucket: "",
    messagingSenderId: "466145747272"
};
    firebase.initializeApp(config);

    export const database = firebase.database ().ref ('/notes')
    export const auth = firebase.auth();
    export const googleProvider = new firebase.auth.GoogleAuthProvider();
    export const twitterProvider = new firebase.auth.TwitterAuthProvider();


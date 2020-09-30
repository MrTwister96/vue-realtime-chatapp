import firebase from "firebase"

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDERV-Jf5C6aZDDiwIQ6PCipTnlcl49BGY",
    authDomain: "vue-realtime-chatapp-ce354.firebaseapp.com",
    databaseURL: "https://vue-realtime-chatapp-ce354.firebaseio.com",
    projectId: "vue-realtime-chatapp-ce354",
    storageBucket: "vue-realtime-chatapp-ce354.appspot.com",
    messagingSenderId: "360067659481",
    appId: "1:360067659481:web:d852dec0c27a5132af70c8"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
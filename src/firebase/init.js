import firebase from "firebase"

// Your web app's Firebase configuration
var firebaseConfig = {
    // Your details here
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();

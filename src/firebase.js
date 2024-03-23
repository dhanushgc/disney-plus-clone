import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAgmxYeJv8vDW66bbFXMPrxs-hgHObxVrk",
    authDomain: "disneyplus-clone-87d2c.firebaseapp.com",
    projectId: "disneyplus-clone-87d2c",
    storageBucket: "disneyplus-clone-87d2c.appspot.com",
    messagingSenderId: "1098552632375",
    appId: "1:1098552632375:web:589b37aaa4efe936714bb2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

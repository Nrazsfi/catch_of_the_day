import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBOJlN4YZYQkUBP0ySIOrScc0J0UAI8V2U",
    authDomain: "cotd-fromlesson23.firebaseapp.com",
    databaseURL: "https://cotd-fromlesson23-default-rtdb.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;

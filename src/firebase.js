import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC7pJ3e-kqCBo-AGKbS5wxRPTXB2pXB4DM",
  authDomain: "line-clone2023.firebaseapp.com",
  projectId: "line-clone2023",
  storageBucket: "line-clone2023.appspot.com",
  messagingSenderId: "521372108357",
  appId: "1:521372108357:web:2169949c9c49dc90e8052c"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };

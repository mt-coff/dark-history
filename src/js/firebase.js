import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyC3tbAimeFnRuqV9U_hYS-6JsuIqpczNE0",
  authDomain: "ca-dark-history.firebaseapp.com",
  databaseURL: "https://ca-dark-history.firebaseio.com",
  projectId: "ca-dark-history",
  storageBucket: "ca-dark-history.appspot.com",
  messagingSenderId: "904856163317"
};
firebase.initializeApp(config);

export const putImage = async (blob, name) => {
  return await firebase
    .storage()
    .ref()
    .child("images")
    .child(name)
    .put(blob);
};

export const updateItem = async (id, val) => {
  return await firebase
    .firestore()
    .collection("posts")
    .doc(id)
    .update(val);
};

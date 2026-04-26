import firebase from "firebase/app";
import "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyA3pOj1Ex5Y95upo3WYO-LtlO9O3-H-usc",
//   authDomain: "skillset-verified.firebaseapp.com",
//   projectId: "skillset-verified",
//   storageBucket: "skillset-verified.appspot.com",
//   messagingSenderId: "75144383574",
//   appId: "1:75144383574:web:75af1487584a97169b7ff7",
//   measurementId: "G-REQXD214NH",
// };
const firebaseConfig = {
  apiKey: "AIzaSyCTRsoeZ7PX1gjIrh6DtEmCzhfmin9dCd8",
  authDomain: "skillset-verified-62a99.firebaseapp.com",
  projectId: "skillset-verified-62a99",
  storageBucket: "skillset-verified-62a99.firebasestorage.app",
  messagingSenderId: "53108230360",
  appId: "1:53108230360:web:b79c5003b4111bd934efad"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();
}

export const db = firebase.firestore();

export default firebase;

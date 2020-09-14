import * as firebase from "firebase";

const firebasekey = {
  apiKey: process.env.VUE_APP_APIKEY,
  authDomain: process.env.VUE_APP_AUTHDOMAIN,
  databaseURL: process.env.VUE_APP_DBURL,
  projectId: process.env.VUE_APP_PROJECTID,
  messagingSenderId: "205361773654",
  appId: process.env.VUE_APP_APPID,
};
firebase.initializeApp(firebasekey);
export default firebase.firestore();

const firebaseConfig = {
  apiKey: "AIzaSyAtVvPjdsj84mWqaG4-7SyjbljCnslZ1SM",
  authDomain: "hendaa-1.firebaseapp.com",
  databaseURL: "https://hendaa-1-default-rtdb.firebaseio.com",
  projectId: "hendaa-1",
  storageBucket: "hendaa-1.appspot.com",
  messagingSenderId: "831134776479",
  appId: "1:831134776479:web:56cd7098fc69cd70a376aa"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();
let db = firebase.firestore();
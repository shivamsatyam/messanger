import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAPw2NL_A9aKyInJy6p3neO1FSqfGf5AAU",
  authDomain: "messenger-clone-5113a.firebaseapp.com",
  databaseURL: "https://messenger-clone-5113a-default-rtdb.firebaseio.com",
  projectId: "messenger-clone-5113a",
  storageBucket: "messenger-clone-5113a.appspot.com",
  messagingSenderId: "359666403039",
  appId: "1:359666403039:web:0a655ba2231908774acb6a",
  measurementId: "G-WW4KQG01C6"
}
)


const db = firebaseApp.firestore()


export default db;












































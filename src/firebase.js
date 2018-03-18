import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyAabL6PMF_kBBm88V0mRVetS-du620EBWk",
  authDomain: "group-d-ywc15.firebaseapp.com",
  databaseURL: "https://group-d-ywc15.firebaseio.com",
  projectId: "group-d-ywc15",
  storageBucket: "group-d-ywc15.appspot.com",
  messagingSenderId: "575457135360"
}

firebase.initializeApp(config)

export default firebase

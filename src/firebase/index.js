import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCVm2OYd2ltb1cmc6BOKbdtpqSFOe0YxyA",
  authDomain: "vue-crypto-4e0af.firebaseapp.com",
  projectId: "vue-crypto-4e0af",
  storageBucket: "vue-crypto-4e0af.appspot.com",
  messagingSenderId: "48842196668",
  appId: "1:48842196668:web:3913ebd66332299cd4f2b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


// const TransactionsRef = collection(db, "transactions");

// await setDoc(doc(TransactionsRef, "SF"), {
//   name: "San Francisco", state: "CA", country: "USA",
//   capital: false, population: 860000,
//   regions: ["west_coast", "norcal"] });


// const transactionCollection = db.collection('users_transactions')

export {
  app,
  auth,
  db,
  //transactionCollection 
}
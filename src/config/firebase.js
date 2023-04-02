
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyAYynf1ZBbbx1_O0jnda29eDyboAcTdzAg",
  authDomain: "tiktok-jornada-99d83.firebaseapp.com",
  projectId: "tiktok-jornada-99d83",
  storageBucket: "tiktok-jornada-99d83.appspot.com",
  messagingSenderId: "247670026950",
  appId: "1:247670026950:web:104eedb1e6338e7e155dc7"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
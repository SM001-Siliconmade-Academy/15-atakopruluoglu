import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCsDYTvoynzSN7xAx4DrwH4nfE2M_-rdJg",
  authDomain: "bankasorgu.firebaseapp.com",
  projectId: "bankasorgu",
  storageBucket: "bankasorgu.appspot.com",
  messagingSenderId: "400407556949",
  appId: "1:400407556949:web:9b0f952dbd065c1979f5dc",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage();
export { app, db, auth, storage };

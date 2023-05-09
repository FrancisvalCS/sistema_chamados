
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAm3Bo2cgdHD9hrnylcVPr4QYb4qKMCDPc",
  authDomain: "chamados-55e11.firebaseapp.com",
  projectId: "chamados-55e11",
  storageBucket: "chamados-55e11.appspot.com",
  messagingSenderId: "957835649838",
  appId: "1:957835649838:web:d0075a5e380987225e10bf"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };
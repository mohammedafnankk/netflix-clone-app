import { initializeApp } from "firebase/app"; 
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyACIr5HQWWg5VUzaAb94yR7jXvtRD2xUak",
    authDomain: "netflix-clone-e2d6b.firebaseapp.com",
    projectId: "netflix-clone-e2d6b",
    storageBucket: "netflix-clone-e2d6b.firebasestorage.app",
    messagingSenderId: "927383726745",
    appId: "1:927383726745:web:29a540f0e329142f1b2608",
    measurementId: "G-LNEQFX1ZQB"
  };
  // const Firebase = initializeApp(firebaseConfig); 
  const app = initializeApp(firebaseConfig); 
  const auth = getAuth(app)
  // export { Firebase }
  export {auth}
  export {app}
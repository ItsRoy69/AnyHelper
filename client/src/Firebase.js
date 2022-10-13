// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAvXVxvdr3UBGynLCA3XGAGk_y5FDzAKE",
  authDomain: "anyhelper-b9ad2.firebaseapp.com",
  projectId: "anyhelper-b9ad2",
  storageBucket: "anyhelper-b9ad2.appspot.com",
  messagingSenderId: "962846483034",
  appId: "1:962846483034:web:46bbb003cb2fbbbb736e63"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
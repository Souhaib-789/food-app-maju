// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhIde8wFwxVhIa5NwRABwmGf1fsMUz67I",
  authDomain: "food-app-maju-848af.firebaseapp.com",
  projectId: "food-app-maju-848af",
  storageBucket: "food-app-maju-848af.appspot.com",
  messagingSenderId: "533585870910",
  appId: "1:533585870910:web:840e36bcf46d6cdc20916f",
  measurementId: "G-D3X59D4NSW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
export { auth, googleProvider };

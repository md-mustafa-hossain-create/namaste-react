import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // 👈 Add this line for Auth
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAuRYlwbOIRQNbjgNdXKrwPVamjX7vZ1s8",
  authDomain: "namaste-food-aut.firebaseapp.com",
  projectId: "namaste-food-aut",
  storageBucket: "namaste-food-aut.firebasestorage.app",
  messagingSenderId: "676550288954",
  appId: "1:676550288954:web:7624da28e812a1707d3703",
  measurementId: "G-885TGEFPWQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export 'auth' so we can use it to login/signup in our Auth page
export const auth = getAuth(app); 

// Optional: Analytics
const analytics = getAnalytics(app);

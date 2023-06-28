import { initializeApp } from "firebase/app";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyATxhTymxR6QOnURGFwqHAWSmdZ-Sh58gU",
  authDomain: "costa-eccomerce.firebaseapp.com",
  projectId: "costa-eccomerce",
  storageBucket: "costa-eccomerce.appspot.com",
  messagingSenderId: "1067060858532",
  appId: "1:1067060858532:web:a1051c9d12c70788476031",
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

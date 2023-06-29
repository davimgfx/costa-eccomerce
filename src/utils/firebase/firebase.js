import { initializeApp } from "firebase/app";

//auth
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

//database
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"

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

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid)
  console.log(userDocRef)

  const userSnapshot = await getDoc(userDocRef)
  console.log(userSnapshot.exists())

  if(!userSnapshot.exists()){
    const { displayName, email, photoURL } = userAuth
    const createdAt = new Date()
    try {
      await setDoc( userDocRef, {
        photoURL,
        displayName,
        email,
        createdAt
      })
    }
   catch (error) {
    console.log(error)
  }  


  return userDocRef
}


}


import { initializeApp } from "firebase/app";

//auth
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

//database
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyATxhTymxR6QOnURGFwqHAWSmdZ-Sh58gU",
  authDomain: "costa-eccomerce.firebaseapp.com",
  projectId: "costa-eccomerce",
  storageBucket: "costa-eccomerce.appspot.com",
  messagingSenderId: "1067060858532",
  appId: "1:1067060858532:web:a1051c9d12c70788476031",
};

const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const signInWithGithub = () => signInWithPopup(auth, githubProvider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();

    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};

export const getCategoriesAndDocumentsFromUser = async () => {
  const collectionRef = collection(db, "users");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const userArray = querySnapshot.docs.map((docSnapshot) => {
    const { displayName, email, photoURL } = docSnapshot.data();
    return {
      email: email,
      displayName: displayName,
      photoURL: photoURL
    };
  });


  return userArray;
};

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;
  //console.log(userAuth)
  //console.log(userAuth.uid)
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email, photoURL } = userAuth;

    const providerId = userAuth.providerData[0].providerId;

    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        photoURL,
        createdAt,
        providerId,
        ...additionalInformation,
      });
    } catch (error) {
      console.log(error);
    }

    return userDocRef;
  }
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

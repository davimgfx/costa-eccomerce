import { signInWithGooglePopup, createUserDocumentFromAuth } from "../utils/firebase/firebase.js";

const SignIn = () => {
  const logGoogleUser = async () => {
    try {
      const {user} = await signInWithGooglePopup();
      const userDocRef = await createUserDocumentFromAuth(user)
 
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in With Google</button>
    </div>
  );
};

export default SignIn;

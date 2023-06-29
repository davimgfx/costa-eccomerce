import React from "react";
import google_icon from "../../assets/google_icon.png";
import { createUserDocumentFromAuth, signInWithGooglePopup, signInWithGithub } from "../../utils/firebase/firebase";

const SingInLayout = () => {
  const logUser = async (provider) => {
    try {
      console.log(provider)
      const { user } = await provider();
      const userDocRef = await createUserDocumentFromAuth(user);
  
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={() => logUser(signInWithGooglePopup)} className="btn">
        <img src={google_icon} alt="google_icon" className="google_image" />
        Sign in with Google Popup
      </button>
      <button onClick={() => logUser(signInWithGithub)} className="btn">
        <i className="fa-brands fa-github"></i>
        Sign in with GitHub
      </button>
    </div>
  );
};

export default SingInLayout;

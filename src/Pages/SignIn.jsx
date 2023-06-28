import { signInWithGooglePopup } from "../utils/firebase/firebase.js";
import { useState } from "react";

const SignIn = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const logGoogleUser = async () => {
    try {
      const response = await signInWithGooglePopup();
      // Aqui você pode tratar a resposta do login bem-sucedido
    } catch (error) {
      console.log(error)
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

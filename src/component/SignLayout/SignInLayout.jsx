import React, { useState } from "react";
import { Link } from "react-router-dom";
import google_icon from "../../assets/google_icon.png";
import logo from "../../assets/logov3.png";
import signInImg from "../../assets/signInImg.png";
import {
  createUserDocumentFromAuth,
  signInWithGithub,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase";
import FormInput from "./FormInput.jsx";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInLayout = () => {
  //Create and Login with Google and Github account
  const loginWithGoogleGithub = async (provider) => {
    const { user } = await provider();
    await createUserDocumentFromAuth(user);
  };


   // Login with Email and Password account
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await signInAuthUserWithEmailAndPassword(email, password);
      console.log(response)
    } catch (error) {
      console.log(error)
      alert("Email or password incorrect")
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
    console.log(formFields);
  };

  return (
    <div className="sign-container">
      <div className="main-container">
        <img src={logo} alt="logo" className="sign-login" />
        <h1>Login Page</h1>
        <h2>Enter your credentials to acess your account</h2>
        <div className="btns-signIn">
          <button
            onClick={() => loginWithGoogleGithub(signInWithGooglePopup)}
            className="btn">
            <img src={google_icon} alt="google_icon" className="google_image" />
            Login with Google
          </button>
          <button
            onClick={() => loginWithGoogleGithub(signInWithGithub)}
            className="btn">
            <i className="fa-brands fa-github"></i>
            Login with GitHub
          </button>
        </div>
        <div className="bars">
          <div className="div-bars-singIn" />
          <h2 className="h2-bars">or</h2>
        </div>

        <form className="form-login">
          <FormInput
            label="Email"
            type="email"
            required
            onChange={handleChange}
            name="email"
            value={email}
          />
          <FormInput
            label="Password"
            type="password"
            required
            onChange={handleChange}
            name="password"
            value={password}
          />

          <button type="submit" className="btn btn-submit" onClick={handleSubmit}>
            Login
          </button>
          <div className="another-options">
            <p>
              Create an account{" "}
              <Link to="../signUp">
                <span className="signUp-highlight">Sign Up</span>
              </Link>
            </p>
            <Link to="../">
              <p className="signUp-highlight">&larr; Go Back to the Home </p>
            </Link>
          </div>
          <p>
            <span className="signUp-highlight">Test Account </span>-
            test@gmail.com <span className="signUp-highlight">/</span>{" "}
            testpassword
          </p>
          <p className="copyright">
            Copyright © 2023 | All rights are reserved
          </p>
        </form>
      </div>
      <div className="image-login-container">
        <img src={signInImg} className="image-login" alt="model_image" />
      </div>
    </div>
  );
};

export default SignInLayout;

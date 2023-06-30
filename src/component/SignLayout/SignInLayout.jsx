import React from "react";
import {Link} from "react-router-dom";
import google_icon from "../../assets/google_icon.png";
import logo from "../../assets/logov3.png";
import signInImg from "../../assets/signInImg.png";
import {
  createUserDocumentFromAuth,
  signInWithGithub,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase";

const SingInLayout = () => {
  const logUser = async (provider) => {
    try {
      console.log(provider);
      const { user } = await provider();
      const userDocRef = await createUserDocumentFromAuth(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sign-container">
      <div className="main-container">
        <img src={logo} alt="logo" className="sign-login" />
        <h1>Login Page</h1>
        <h2>Enter your credentials to acess your account</h2>
        <div className="btns-signIn">
          <button
            onClick={() => logUser(signInWithGooglePopup)}
            className="btn">
            <img src={google_icon} alt="google_icon" className="google_image" />
            Login with Google
          </button>
          <button onClick={() => logUser(signInWithGithub)} className="btn">
            <i className="fa-brands fa-github"></i>
            Login with GitHub
          </button>
        </div>
        <div className="bars">
          <div className="div-bars-singIn" />
          <h2 className="h2-bars">or</h2>
        </div>

        <form className="form-login">
          <label>Email</label>
          <input type="email" required className="input" name="email" />
          <label>Password</label>
          <input type="password" required className="input" name="password" />

          <button type="submit" className="btn btn-submit">
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
          <p><span className="signUp-highlight">Test Account </span>- test@gmail.com <span className="signUp-highlight">/</span> testpassword</p>
          <p className="copyright">
            Copyright © 2023 | All rights are reserved
          </p>
        </form>
      </div>
      <div className="image-login-container">
        <img src={signInImg} className="image-login" />
      </div>
    </div>
  );
};

export default SingInLayout;

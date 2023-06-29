import React from "react";
import google_icon from "../../assets/google_icon.png";
import {
  createUserDocumentFromAuth,
  signInWithGithub,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase";
import singUpImg from "../../assets/singUpImg.jpg"

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
    <div className="login-container">
      <h1>Login Page</h1>
      <h2>Enter your credentials to acess your account</h2>
      <div className="btns-signIn">
        <button onClick={() => logUser(signInWithGooglePopup)} className="btn">
          <img src={google_icon} alt="google_icon" className="google_image" />
          Login with Google 
        </button>
        <button onClick={() => logUser(signInWithGithub)} className="btn">
          <i className="fa-brands fa-github"></i>
          Login with GitHub
        </button>
      </div>
      <div className="bars">
        <h2>or</h2>
      </div>

      <form className="form-login">
   
        <label>Email</label>
        <input
          type="email"
          required
          className="input"
          name="email"
       
        />
        <label>Password</label>
        <input
          type="password"
          required
          className="input"
          name="password"
      
        />
       
        <button type="submit" className="btn btn-submit">
          Login
        </button>
        <p>Create an account? <span className="signUp-highlight">Sign Up</span></p>
        <p className="signUp-highlight">Go Back to the Home </p>
      </form>
    </div>
    <div className="image-container">
      <img  src={singUpImg} className="image"/>
    </div>
  </div>
  );
};

export default SingInLayout;

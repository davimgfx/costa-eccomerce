import { useState } from "react";
import logo from "../../assets/logov3.png";
import signUpImg from "../../assets/signUpImg.png";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.js";
import {Link} from "react-router-dom"

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
  providerId: "costa-ecommerce",
};

const SignUpLayout = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword, providerId } =
    formFields;

  const resetFormFild = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName, providerId });
      alert("Account create");
      resetFormFild();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        alert("User creation encountered an error", error);
      }
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-container">
      <div className="main-container">
        <img src={logo} alt="logo" className="sign-login" />
        <h1>Sign Up Page</h1>
        <h2>Enter your credentials to create your account</h2>
        <div className="bars">
          <div className="div-bars-signUp" />
        </div>

        <form onSubmit={handleSubmit} className="form-login">
          <label>Name</label>
          <input
            type="text"
            required
            onChange={handleChange}
            name="displayName"
            value={displayName}
            className="input"
          />
          <label>Email</label>
          <input
            type="email"
            required
            onChange={handleChange}
            name="email"
            value={email}
            className="input"
          />
          <label>Password</label>
          <input
            type="password"
            required
            onChange={handleChange}
            name="password"
            value={password}
            className="input"
          />
          <label>Confirm Password</label>
          <input
            type="password"
            required
            onChange={handleChange}
            name="confirmPassword"
            value={confirmPassword}
            className="input"
          />
          <button type="submit" className="btn btn-submit">
            Create Account
          </button>
          <div className="another-options">
            <p>
            Already have account? {""}
              <Link to="../signIn"><span className="signUp-highlight">Login </span></Link>
            </p>
            <Link to="../">
              <p className="signUp-highlight">&larr; Go Back to the Home </p>
            </Link>
          </div>
          <p className="copyright">
            Copyright © 2023 | All rights are reserved
          </p>
        </form>
      </div>
      <div className="image-login-container">
        <img src={signUpImg} className="image-login" />
      </div>
    </div>
  );
};

export default SignUpLayout;

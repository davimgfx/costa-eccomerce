import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth  } from "../../utils/firebase/firebase.js"
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
  providerId: "costa-ecommerce",
};

const SignUpLayout = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword, providerId } = formFields;
  
  const resetFormFild = () =>{
      setFormFields(defaultFormFields)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(password !== confirmPassword){
      alert("Passwords do not match")
      return;
    }

    try{
      const { user } = await createAuthUserWithEmailAndPassword(email, password)
      await createUserDocumentFromAuth(user, { displayName, providerId})
      alert("Account create")
      resetFormFild()
    }catch(error){
      if(error.code === "auth/email-already-in-use"){
        alert("Cannot create user, email already in use")
      } else {
        alert("User creation encountered an error", error)
      }
    }
  }
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  return (
    
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
        <label>Email</label>
        <input
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <label>Password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <label>Confirm Password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <button type="submit" className="btn btn-submit">
          Submit
        </button>
        
      </form>
  
  );
};

export default SignUpLayout;

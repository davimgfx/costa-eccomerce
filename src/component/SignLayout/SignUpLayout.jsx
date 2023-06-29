import { useState } from "react";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
  providerId: "costa-ecommerce",
};

const SignUpLayout = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  console.log(formFields);
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <form onSubmit={() => {}}>

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
      <button type="submit" className="btn">
        Submit
      </button>
    </form>
  );
};

export default SignUpLayout;

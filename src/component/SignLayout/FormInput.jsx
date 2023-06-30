import React from "react";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <>
      <label>{label}</label>
      <input className="input"
        {...otherProps}
        
      />
    </>
  );
};

export default FormInput;

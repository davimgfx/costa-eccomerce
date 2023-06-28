import React from "react";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="error-page">
      <h2>404 error</h2>
      <p>This page doesn't exist</p>
      <p>
        Back to {""}
         <Link to="/">
           <span className="high-light">Home Page</span>
        </Link>
      </p>
    </div>
  );
};

export default ErrorPage;

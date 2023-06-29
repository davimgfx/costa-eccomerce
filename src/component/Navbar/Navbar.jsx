import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logov3.png";
import { categoriesData } from "../../constants";

const Navbar = () => {
  const orderedCategoriesData = [
    categoriesData.find((item) => item.title === "Womens"),
    categoriesData.find((item) => item.title === "Mens"),
    categoriesData.find((item) => item.title === "Jackets"),
    categoriesData.find((item) => item.title === "Hats"),
    categoriesData.find((item) => item.title === "Sneakers"),
  ];

  return (
    <header>
      <nav className="navbar">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <ul className="nav-items-pages">
          <Link to="shop">
            <li>Shop</li>
          </Link>
          {orderedCategoriesData.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
        <ul className="nav-items-account">
           
          <Link to="signIn">
            <i className="fa-solid fa-user"></i>
          </Link>
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import defaultProfile from "../../assets/defaultProfile.jpg";
import logo from "../../assets/logov3.png";
import { categoriesData } from "../../constants";
import { UserContext } from "../../context/UserProvider";
import { signOutUser } from "../../utils/firebase/firebase";
const Navbar = () => {
  //current User
  const { currentUser } = useContext(UserContext);
  const [modalUser, setModalUser] = useState(false);
  // if photoURL is not null, undefined or "undefined"
  const isPhotoURLValid = (url) => url && url !== "undefined";

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
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
          {currentUser ? (
            <Link to="signIn">
            
              <div className="user_image">
                <img
                  src={
                    isPhotoURLValid(currentUser.photoURL)
                      ? currentUser.photoURL
                      : defaultProfile
                  }
                  alt="Profile"
                  className="profile_image"
                  onClick={() => {
                    setModalUser(!modalUser)
                  }}
                />
                <div
                  className={modalUser ? "modal_image" : "hidden"}
                 
                >
                  <p className="modal_image_displayName">{currentUser.displayName}</p>
                  <p className="modal_image_email">{currentUser.email}</p>
                  <div className="modal_image_account">
                  <i class="fa-solid fa-user"></i>
                  <p>Account</p>
                  </div>
                  <div className="modal_image_signOut">
                  <i class="fa-solid fa-right-from-bracket"></i>
                  <p onClick={signOutUser}>Sign Out</p>
                  </div>
                </div>
              </div>
              
            </Link>
          ) : (
            <Link to="signIn">
              <i className="fa-solid fa-user" ></i>
            </Link>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

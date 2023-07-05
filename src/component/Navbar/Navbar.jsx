import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import defaultProfile from "../../assets/defaultProfile.jpg";
import logo from "../../assets/logov3.png";
import { categoriesData } from "../../constants/categoryItem";
import { CartContext } from "../../context/Cart";
import { UserContext } from "../../context/UserProvider";
import {
  getCategoriesAndDocumentsFromUser,
  signOutUser,
} from "../../utils/firebase/firebase";
import CartDropdown from "../CartDropdown/CartDropdown";
import CartIcon from "../CartIcon/CartIcon";

const Navbar = () => {
  //current User
  const { currentUser } = useContext(UserContext);
  const [foundUser, setFoundUser] = useState(null);


   useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocumentsFromUser();
      const searchEmail = currentUser?.email;
      const user = categoryMap.find((user) => user.email === searchEmail);
      setFoundUser(user); 
    };
    getCategoriesMap();
  }, []);
  
 

  //cart open
  const { setIsCartOpen, isCartOpen } = useContext(CartContext);
  const toggleIsCartOpen = () => {
    if (isCartOpen) {
      setIsCartOpen(!isCartOpen);
    }
    return;
  };

  const modalRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModalUser(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);


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
        <Link to="/" onClick={toggleIsCartOpen}>
          <img
            src={logo}
            alt="Logo"
            className="logo"
            onClick={() => {
              if (modalUser) {
                setModalUser(!modalUser);
              }
              return;
            }}
          />
        </Link>
        <ul className="nav-items-pages">
          <Link to="shop" onClick={toggleIsCartOpen}>
            <li>Shop</li>
          </Link>
          {orderedCategoriesData.map((item) => (
            <li key={item.id} onClick={toggleIsCartOpen}>
              {item.title}
            </li>
          ))}
        </ul>
        <ul className="nav-items-account">
          <CartIcon />
          {isCartOpen && <CartDropdown />}
          {currentUser ? (
            <div className="user_image">
              <img
                src={
                  isPhotoURLValid(foundUser?.photoURL)
                    ? (foundUser.photoURL)
                    : ( currentUser?.photoURL ||defaultProfile)
                }
                alt="Profile_image"
                className="profile_image"
                onClick={() => {
                  setModalUser(!modalUser);
                }}
              />
              <div
                className={modalUser ? "modal_image" : "hidden"}
                ref={modalRef}>
                <p className="modal_image_displayName">
                  {foundUser?.displayName || currentUser?.displayName}
                </p>
                <p className="modal_image_email">{currentUser?.email}</p>
                <div className="modal_image_bars"></div>

                <div className="modal_image_checkout">
                  <i className="fa-solid fa-cart-shopping"></i>
                  <Link to="../../checkOut">
                    <p>Check Up</p>
                  </Link>
                </div>
                <div className="modal_image_signOut">
                  <i className="fa-solid fa-right-from-bracket"></i>
                  <p onClick={signOutUser}>Sign Out</p>
                </div>
              </div>
            </div>
          ) : (
            <Link to="signIn">
              <i className="fa-solid fa-user"></i>
            </Link>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

import "./sass/main.scss";
import { Navbar, Footer } from "./component";
import { Outlet, useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();

  if (location.pathname === "/signIn" || location.pathname === "/signUp") {
    return (
      <>
        <div className="hidden">
          <Navbar />
        </div>
        <Outlet />;
      </>
    );
  }

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;

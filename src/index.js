import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./sass/main.scss";
import App from "./App";
import { UserProvider } from "./context/UserProvider";
import { ProductsProvider } from "./context/Products";
import { ErrorPage, Home, SignIn, SignUp, Shop } from "./Pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "signIn",
        element: <SignIn />,
      },
      {
        path: "signUp",
        element: <SignUp />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <UserProvider>

      <ProductsProvider>

        <RouterProvider router={router} />
        
      </ProductsProvider>

    </UserProvider>

  </React.StrictMode>
);

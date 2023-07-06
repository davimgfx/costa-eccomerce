import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./sass/main.scss";
import App from "./App";
import { UserProvider } from "./context/UserProvider";
import { CategoriesProvider } from "./context/Categories";
import { CartProvider } from "./context/Cart";
import { ErrorPage, Home, SignIn, SignUp, Shop, CheckOut, Category } from "./Pages";

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
      {
        path: "checkOut",
        element: <CheckOut />,
      },
      {
        path: "shop/:id",
        element: <Category />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <UserProvider>

      <CategoriesProvider>

        <CartProvider>

          <RouterProvider router={router} />
          
        </CartProvider>

      </CategoriesProvider>

    </UserProvider>

  </React.StrictMode>
);

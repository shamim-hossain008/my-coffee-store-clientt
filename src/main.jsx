import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import AddCoffee from "./components/AddCoffee.jsx";
import SignIn from "./components/SignIn.jsx";
import SingUp from "./components/SingUp.jsx";
import UpdateCoffee from "./components/UpdateCoffee";
import Users from "./components/Users.jsx";
import "./index.css";
import AuthProvider from "./providers/AuthProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch("http://localhost:5150/coffee"),
  },
  {
    path: "/addCoffee",
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: "/updateCoffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) => fetch(`http://localhost:5150/coffee/${params.id}`),
  },
  {
    path: "/signup",
    element: <SingUp />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/users",
    element: <Users></Users>,
    loader: () => fetch("http://localhost:5150/user"),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

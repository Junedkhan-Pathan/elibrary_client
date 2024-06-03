import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BooksPage from "./pages/BooksPage.tsx";
import Login from "./components/Auth/Login.tsx";
import SignUp from "./components/Auth/SignUp.tsx";
import DashboardPage from "./pages/DashboardPage.tsx";
import AddBook from "./components/dashboard/book-form/AddBook.tsx";
import AuthLayout from "./components/Auth/AuthLayout.tsx";
import BookTable from "./components/dashboard/book-table/BookTable.tsx";
import NavbarFooterWrapper from "./components/NavbarFooterWrapper.tsx";
import HomePage from "./pages/HomePage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "books",
        element: <BooksPage />,
      },
      {
        path: "auth",
        element: (
          <NavbarFooterWrapper>
            <AuthLayout />
          </NavbarFooterWrapper>
        ),
        children: [
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "signup",
            element: <SignUp />,
          },
        ],
      },

      {
        path: "dashboard",
        element: (
          <NavbarFooterWrapper>
            <DashboardPage />
          </NavbarFooterWrapper>
        ),
        children: [
          {
            path: "",
            element: <BookTable />,
          },
          {
            path: "addbook",
            element: <AddBook />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

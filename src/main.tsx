import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import BooksPage from "./pages/BooksPage.tsx";
import Login from "./components/Auth/Login.tsx";
import SignUp from "./components/Auth/SignUp.tsx";
import DashboardPage from "./pages/DashboardPage.tsx";
import AddBook from "./components/dashboard/book-form/AddBook.tsx";
import AuthLayout from "./components/Auth/AuthLayout.tsx";
import BookTable from "./components/dashboard/book-table/BookTable.tsx";
import HomePage from "./pages/HomePage.tsx";

const queryClient = new QueryClient();

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
        element: <AuthLayout />,
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
        element: <DashboardPage />,
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
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);

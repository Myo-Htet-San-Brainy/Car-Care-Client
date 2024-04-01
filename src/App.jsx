import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  Account,
  Chatbot,
  CommonLayout,
  Error,
  Main,
  Notifications,
  Search,
  Treatments,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CommonLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: "chatBot/:id",
        element: <Chatbot />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "treatments",
        element: <Treatments />,
      },
      {
        path: "notifications",
        element: <Notifications />,
      },
      {
        path: "account",
        element: <Account />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

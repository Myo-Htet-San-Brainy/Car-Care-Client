import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Chatbot, CommonLayout, Error, Main } from "./pages";

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
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

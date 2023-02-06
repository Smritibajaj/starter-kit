import { createBrowserRouter } from "react-router-dom";
import Home from "../../layouts/Home";

export const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element:  <Home />,
      //loader: funcToloadPage
    },
  ],
  {
    window,
  }
);

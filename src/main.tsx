import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./app/store";
import "./app/assets/css/tailwind.css";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { appRouter } from "./app/features/appRouter";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  </React.StrictMode>
);

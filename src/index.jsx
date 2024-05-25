import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Router } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Home from "./page/home";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
let allRouters = createBrowserRouter([{ path: "/home", element: <Home /> }]);

root.render(
  <StrictMode>
    <RouterProvider router={allRouters}>
      <App />
    </RouterProvider>
  </StrictMode>
);

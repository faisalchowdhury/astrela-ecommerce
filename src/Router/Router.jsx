import { createBrowserRouter } from "react-router";
import Root from "../Root";
import Home from "../Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("https://fakestoreapi.com/products/categories"),
        hydrateFallbackElement:<span className="loading loading-infinity loading-xl"></span>
      
      },
    ],
  },
]);

export { router };

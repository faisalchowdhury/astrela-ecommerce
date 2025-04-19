import { createBrowserRouter } from "react-router";
import Root from "../Root";
import Home from "../Pages/Home";
import SingleProduct from "../Component/SingleProduct";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("https://fakestoreapi.com/products/categories"),
        hydrateFallbackElement: (
          <div className="flex justify-center items-center h-[100vh]">
            <span className="loading loading-infinity loading-xl"></span>
          </div>
        ),
      },
      {
        path: "/single-product/:product-id",
        Component: SingleProduct,
      },
    ],
  },
]);

export { router };

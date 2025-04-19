import { createBrowserRouter } from "react-router";
import Root from "../Root";
import Home from "../Pages/Home";
import SingleProduct from "../Component/SingleProduct";
import ProductsPage from "../Pages/ProductsPage";
import About from "../Pages/About";

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
        loader: ({ params }) =>
          fetch(`https://fakestoreapi.com/products/${params["product-id"]}`),
      },
      {
        path: "products",
        loader: () => fetch("https://fakestoreapi.com/products"),
        Component: ProductsPage,
      },
      {
        path: "about",
        Component: About,
      },
    ],
  },
]);

export { router };

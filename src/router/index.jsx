import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout";
import User from "../pages/User";
import Products from "../pages/Products";
import Profile from "../pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/user",
        element: <User />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

export default router;

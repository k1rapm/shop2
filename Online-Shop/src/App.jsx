import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Layout from "./Layout/Layout";

import SignUp from "./pages/Sign Up/Sign Up";
import Login from "./pages/Login/Login";
import Cart from "./pages/Cart/Cart";
import ShopingCart from "./pages/ShopingCart/ShopingCart";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  // {
  //   path: "/registration",
  //   element: <Registration />,
  // },
  {
    path: "/catalog",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "sign up",
        element: <SignUp />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "cart/:id",
        element: <Cart />,
      },
      {
        path: "shoppingcart",
        element: <ShopingCart />
      },

    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

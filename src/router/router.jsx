import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Pricing from "../pages/Pricing/Pricing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/fiyatlandirma",
        element: <Pricing />,
      },
    ],
  },
]);

export default router;

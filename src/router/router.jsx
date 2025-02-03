import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Pricing from "../pages/Pricing/Pricing";
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import About from "../pages/About/About";
import { Contact } from "../pages/Contact/Contact";

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
      {
        path: "/hizmetler",
        element: <Services />,
      },
      {
        path: "/hakkimizda",
        element: <About />,
      },
      {
        path: "/iletisim",
        element: <Contact />,
      },
    ],
  },
]);

export default router;

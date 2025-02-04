import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Pricing from "../pages/Pricing/Pricing";
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import About from "../pages/About/About";
import { Contact } from "../pages/Contact/Contact";
import { PolicyLayoutSectionCookie } from "../components/PolicyLayouts/PolicyLayoutSectionCookie";
import { PolicyLayoutSectionPrivacy } from "../components/PolicyLayouts/PolicyLayoutSectionPrivacy";
import { PolicyLayoutSectionTermsConditions } from "../components/PolicyLayouts/PolicyLayoutSectionTermsConditions";
import { SSS_Section } from "../pages/SSS/SSS_Section";
import { Error404 } from "../pages/ErrorPages/Error404";

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

      {
        path: "/gizlilik-politikasi",
        element: <PolicyLayoutSectionPrivacy />,
      },
      {
        path: "/cerez-politikasi",
        element: <PolicyLayoutSectionCookie />,
      },
      {
        path: "/sartlar-kosullar",
        element: <PolicyLayoutSectionTermsConditions />,
      },
      {
        path: "/sss",
        element: <SSS_Section />,
      },
      {
        path: "*",
        element: <Error404 />,
      },
    ],
  },
]);

export default router;

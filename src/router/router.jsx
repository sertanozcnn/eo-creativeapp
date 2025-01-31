import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Pricing from "../pages/Pricing/Pricing";
import Home from "../pages/Home/Home";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/fiyatlandirma" element={<Pricing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

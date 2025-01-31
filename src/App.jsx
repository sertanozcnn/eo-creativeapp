import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Plan from "./components/Plans/Plan";
function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow">
          <Outlet />
        </div>
        <Plan />
        <Footer />
      </div>
    </>
  );
}

export default App;

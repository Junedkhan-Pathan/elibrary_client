import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Header/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <div>
        <Outlet />
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;

import { Outlet } from "react-router-dom";
import "./App.css";
import Portfolio from "./pages/Portfolio";
import Footer from "./pages/Footer";
function App() {
  return (
    <>
     <Portfolio />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;

import { Outlet } from "react-router-dom";
import "./App.css";
// import Homepage from "./pages/Homepage";
import Portfolio from "./pages/Portfolio";
import Footer from "./pages/Footer";
import About from "./pages/About";
import Resume from "./pages/Resume";
function App() {
  return (
    <>
      {/* <Portfolio /> */}
     <Resume />
     <Portfolio />
      <Outlet />
      <About />
      <Footer />
    </>
  );
}

export default App;

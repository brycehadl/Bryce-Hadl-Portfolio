import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import App from "./App.jsx";
import Homepage from "./pages/Homepage.jsx"
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Projects from './pages/Projects.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/projects",
        element: <Projects />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router} />
);

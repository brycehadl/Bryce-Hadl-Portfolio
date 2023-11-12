import myResume from "../assets/Resume.png";
import { Link } from "react-router-dom";


function Portfolio() {
  return (
    <header id="navbar">
      <div className="nav-div">
        <ul className="nav-menu">
          <li>
            <Link to="/about" > About</Link>
          </li>

          <li>
            <Link to="/projects" > Projects</Link>
          </li>
          <li>
            <Link to="/contact" >Contact </Link>
          </li>
          <li>
            <Link rel="noreferrer" target="_blank" to={myResume}>
              Resume
            </Link>
          </li>
        </ul>
        <ul className="social-menu">
          <li>
            <Link target="_blank" to={"https://github.com/brycehadl"}>
              <i className="fa-brands fa-github nav-item"></i>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Portfolio;

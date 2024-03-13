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
            <Link rel="noreferrer" target="_blank" to={'https://docs.google.com/document/d/1-DSiXApLVK-hMx6JUfwmHepj9EEpsV_Vp2lV9c5Q-zs/edit?usp=sharing'}>
              Resume
            </Link>
          </li>
        </ul>
        <ul className="social-menu">
          <li>
          <Link target='_blank' to={'https://www.linkedin.com/in/bryce-h-604b802b1/'}><i className="fa-brands fa-linkedin-in github-footer github-spacing"></i></Link>
          <Link target="_blank" to={"https://github.com/brycehadl"}><i className="fa-brands fa-github nav-item"></i></Link>  
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Portfolio;

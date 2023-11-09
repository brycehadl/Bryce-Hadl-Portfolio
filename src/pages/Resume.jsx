import myResume from "../assets/Resume.png";
import { Link, useLocation } from "react-router-dom";
import Contact from "../pages/Contact.jsx"
function Resume() {
  const currentPage = useLocation().pathname;

  return (
    <>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
            >
              About Me
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/portfolio"
              className={currentPage === '/portfolio' ? 'nav-link active' : 'nav-link'}
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={Contact === '/contact' ? 'nav-link active' : 'nav-link'}
            >
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/resume"
              className={currentPage === '/resume' ? 'nav-link active' : 'nav-link'}>

          
            <li><Link className="nav-item" rel='noreferrer' target='_blank' to={myResume}>Resume</Link></li>
              Resume
            </Link>
            <ul className='social-menu'>
                    <li><Link target='_blank' to={"https://github.com/brycehadl"}><i className="fa-brands fa-github nav-item"></i></Link></li>
                    
                </ul>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Resume;
          
       
       
       
//         <ul className="social-menu">
//           <li>
//             <Link  to={"https://github.com/brycehadl"}>
//               <i className="fa-brands fa-github nav-item"></i>
//             </Link>
//           </li>
//         </ul>
//         </ul>
//       </div>
//     </header>
//   );
// }

// export default Resume;

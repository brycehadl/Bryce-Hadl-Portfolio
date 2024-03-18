import { project } from "../data/projectImport";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <section id="projects">
      <div className="projects-container">
        <div className="projects-text">
          <h1 className="projects-h1">My favorite Apps</h1>
          <p className="projects-p">
            Click to view my repositories, or go to my GitHub
          </p>
        </div>
        <div className="projects-display">
          {project.map((project) => (
            <Link
              to={project.link}
              key={project.image}
              className="projects-link"
            >
              <div className="projects-info">
                <img src={project.image} alt="project screenshot" className="projects-image"/>
                <div>
                  <h1 className="project-title">{project.title}</h1>
                  <p className="project-description">{project.description}</p>
                  <button>{project.website}</button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

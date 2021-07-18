import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";

import "./ProjectCard.css";

const ProjectCard = (props) => {
  const { imageUrl, title, description, githubUrl, skills } = props;

  return (
    <div id="container">
      <div class="project-details">
        <h1>{title}</h1>
        <p>{description}</p>
        <div class="control">
          <a href={githubUrl}>
            <button class="btn">
              <span class="btn-icon">
                <FontAwesomeIcon icon={faFolder} />
              </span>
              <span class="buy">Github Repo</span>
            </button>
          </a>
          <a href={githubUrl}>
            <button class="btn">
              <span class="btn-icon">
                <FontAwesomeIcon icon={faFolder} />
              </span>
              <span class="buy">Github Repo</span>
            </button>
          </a>
        </div>
      </div>

      <div class="project-image">
        <img src={imageUrl} alt={title} />

        <div class="info">
          <h2>Skills</h2>
          <ul>
            {skills.map((skill) => {
              return <li>{skill}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

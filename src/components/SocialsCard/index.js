import React from "react";

import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectCard = () => {
  return (
    <div class="social-container">
      <h3>Social Follow</h3>

      <a
        href="https://www.linkedin.com/in/pamela-bhopal/"
        className="Linked in social"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
    </div>
  );
};

export default ProjectCard;

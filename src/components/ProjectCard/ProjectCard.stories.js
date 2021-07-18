import React from "react";

import ProjectCard from ".";

export default {
  title: "Components/ProjectCard",
  component: ProjectCard,
};

export const GithubProjectCard = (props) => <ProjectCard {...props} />;

GithubProjectCard.args = {
  imageUrl:
    "https://pdubb3.github.io/pamela-dubb/assets/img/work-day-schedule.jpg",
  title: "Work Day Scheduler",
  description:
    "In this project, I have created a simple calendar application that allows a user to save events for each hour of the day by modifying starter code.",
  githubUrl: "https://github.com/PDUBB3/work-day-schedule",
};

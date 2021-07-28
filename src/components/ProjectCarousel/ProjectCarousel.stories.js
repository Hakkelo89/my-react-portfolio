import React from "react";

import ProjectCarousel from ".";

export default {
  title: "Components/ProjectCarousel",
  component: ProjectCarousel,
};

export const GithubProjectCarousel = (props) => <ProjectCarousel {...props} />;

GithubProjectCarousel.args = {
  imageUrl:
    "https://pdubb3.github.io/pamela-dubb/assets/img/work-day-schedule.jpg",
  title: "Work Day Scheduler",
  description:
    "In this project, I have created a simple calendar application that allows a user to save events for each hour of the day by modifying starter code.",
  githubUrl: "https://github.com/PDUBB3/work-day-schedule",
  skills: ["jQuery", "JavaScript", "HTML", "CSS"],
};
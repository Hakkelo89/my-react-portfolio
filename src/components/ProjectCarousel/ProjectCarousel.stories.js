import React from "react";
import ProjectCarousel from ".";

export default {
  title: "Components/ProjectCarousel",
  component: ProjectCarousel,
};

export const AllProjectCarousel = (props) => <ProjectCarousel {...props} />;

AllProjectCarousel.args = {
  imageUrl:
    "https://pdubb3.github.io/pamela-dubb/assets/img/work-day-schedule.jpg",
  title: "Work Day Scheduler",
};

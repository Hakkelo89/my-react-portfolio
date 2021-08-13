import ProjectCard from "../../components/ProjectCard";

const ProjectsPage = () => {
  return (
    <div>
      <ProjectCard
        title="Dish Up"
        skills={[
          "HTML",
          "CSS",
          "Javascript",
          "jQuery",
          "Handlebars",
          "Node.js",
          "Express",
          "MySql",
          "Bcrypt",
        ]}
        description="A meal planning app, which provides users the ability to easily search for food, using a range of possible filters for dietary requirements and intolerances. These meals can be saved to meal plans on the user profile, so they can be easily referred back to in the future. Users can easily view the recipes for each meal they have chosen, handily stored in one place. This meal planning app was created in only 2 weeks! "
      />
      <ProjectCard
        title="Travel App"
        skills={[
          "HTML",
          "CSS",
          "Javascript",
          "Semantic UI Framework",
          "Web API's",
        ]}
        description=" A travel app which allows the user to find information about the countries of the world it includes information such as, language spoken, currency converter, vaccines and places to see. "
      />
    </div>
  );
};

export default ProjectsPage;

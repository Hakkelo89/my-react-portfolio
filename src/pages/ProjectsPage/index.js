import Grid from "@material-ui/core/Grid";

import ProjectCard from "../../components/ProjectCard";
import projects from "./projects";

const ProjectsPage = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="stretch"
      alignContent="stretch"
    >
      {projects.map((project) => {
        return (
          <ProjectCard
            title={project.title}
            skills={project.skills}
            description={project.description}
            imageUrl={project.imageUrl}
            appUrl={project.appUrl}
            repoUrl={project.repoUrl}
          />
        );
      })}
    </Grid>
  );
};

export default ProjectsPage;

// <ProjectCard
//         title="Tech-blog"
//         skills={["HTML", "CSS", "Javascript", "jQuery", "Handlebars"]}
//         description=" A CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers' posts as well."
//       />

//       <ProjectCard
//         title="Employee Management System"
//         skills={[
//           "HTML",
//           "CSS",
//           "Javascript",
//           "jQuery",
//           "Node.js",
//           "Enquirer",
//           "MySql",
//         ]}
//         description="An employee management system for managing a company's employees using node, inquirer and MySQL."
//       />

//       <ProjectCard
//         title="E-commerce Back End"
//         skills={["HTML", "CSS", "Javascript", "jQuery", "Express", "MySql"]}
//         description="A back end for an e-commerce site using Express.js, API and sequelize to interact with a MySQL database."
//       />

//       <ProjectCard
//         title="Note Taker"
//         skills={[
//           "HTML",
//           "CSS",
//           "Javascript",
//           "jQuery",
//           "Handlebars",
//           "Node.js",
//           "Express",
//           "MySql",
//           "Bcrypt",
//         ]}
//         description="A meal planning app, which provides users the ability to easily search for food, using a range of possible filters for dietary requirements and intolerances. These meals can be saved to meal plans on the user profile, so they can be easily referred back to in the future. Users can easily view the recipes for each meal they have chosen, handily stored in one place. This meal planning app was created in only 2 weeks! "
//       />

//       <ProjectCard
//         title="README Generator"
//         skills={[
//           "HTML",
//           "CSS",
//           "Javascript",
//           "jQuery",
//           "Handlebars",
//           "Node.js",
//           "Express",
//           "MySql",
//           "Bcrypt",
//         ]}
//         description="A meal planning app, which provides users the ability to easily search for food, using a range of possible filters for dietary requirements and intolerances. These meals can be saved to meal plans on the user profile, so they can be easily referred back to in the future. Users can easily view the recipes for each meal they have chosen, handily stored in one place. This meal planning app was created in only 2 weeks! "
//       />

//       <ProjectCard
//         title="Weather Dashboard"
//         skills={[
//           "HTML",
//           "CSS",
//           "Javascript",
//           "jQuery",
//           "Handlebars",
//           "Node.js",
//           "Express",
//           "MySql",
//           "Bcrypt",
//         ]}
//         description="A meal planning app, which provides users the ability to easily search for food, using a range of possible filters for dietary requirements and intolerances. These meals can be saved to meal plans on the user profile, so they can be easily referred back to in the future. Users can easily view the recipes for each meal they have chosen, handily stored in one place. This meal planning app was created in only 2 weeks! "
//       />

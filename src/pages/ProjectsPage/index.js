import { gql, useQuery } from "@apollo/client";

import ProjectCard from "../../components/ProjectCard";

const PROJECT_QUERY = gql`
  query Query {
    projects {
      title
      imageUrl
      description
      githubUrl
      skills
    }
  }
`;

const ProjectsPage = () => {
  const { loading, error, data } = useQuery(PROJECT_QUERY);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>ERROR</div>;
  }

  return (
    <div className="main-content">
      <ProjectCard projects={data.projects} />
    </div>
  );
};

export default ProjectsPage;

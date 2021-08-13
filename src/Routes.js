import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutMePage from "./pages/AboutMePage/";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/about-me">
        <AboutMePage />
      </Route>
      <Route exact path="/contact">
        <ContactPage />
      </Route>
      <Route exact path="/projects">
        <ProjectsPage />
      </Route>
      <Route exact path="/">
        <HomePage />
      </Route>
    </Switch>
  );
};

export default Routes;

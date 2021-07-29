import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutMePage from "./pages/AboutMePage";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/AboutMe">
        <AboutMePage />
      </Route>
      <Route exact path="/Contact">
        <ContactPage />
      </Route>
      <Route exact path="/Projects">
        <ProjectsPage />
      </Route>
    </Switch>
  );
};

export default Routes;

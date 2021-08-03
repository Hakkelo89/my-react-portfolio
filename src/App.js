import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";

import NavigationBar from "./components/NavigationBar";
// import Footer from "./components/Footer";

// const client = new ApolloClient({
//   uri: process.env.GRAPHQL_URL || "http://localhost:4000/",
//   cache: new InMemoryCache(),
// });

const App = () => {
  return (
    // <ApolloProvider client={client}>
    <Router>
      <NavigationBar />
      <Routes />
    </Router>
    // </ApolloProvider>
  );
};

export default App;

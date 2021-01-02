import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Shop from "./components/Shop";
import ItemDetails from "./components/ItemDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} exact/>
          <Route path="/shop/:id" component={ItemDetails} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

export default App;

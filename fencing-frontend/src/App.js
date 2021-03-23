import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home.jsx";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Add from "./components/add.jsx";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/add" component={Add}></Route>
        <Route path="/remove"></Route>
      </Switch>
    </Router>
  );
}

export default App;

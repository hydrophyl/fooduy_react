import React from "react";
import "./App.css";
import Header from "./components/common/Header";
import Dashboard from "./components/dashboard/Dashboard";
import Login from './components/auth/Login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route component={Dashboard}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

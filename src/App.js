import React from "react";
import "./App.css";
import Header from "./components/common/Header";
import Dashboard from "./components/dashboard/Dashboard";
import Login from './components/auth/Login';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <ToastContainer position="top-right" />
        <Switch>
          <Route exact path="/login" component={Login}/>
          <Route component={Dashboard}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

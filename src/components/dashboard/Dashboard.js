import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Add from "./Add";
import Data from "./Data";
import Home from "../common/Home";
import LeftSider from "../common/LeftSider";
import {Row, Col} from 'antd';

function Dashboard() {
  return (
    <div>
      <Router>
        <Row>
          <Col >
            <LeftSider />
          </Col>
          <Col span={18}>
            <Switch>
              <Route exact path="/add/einkauf" component={Add}></Route>
              <Route path="/data" component={Data}></Route>
              <Route path="/home" component={Home}></Route>
            </Switch>
          </Col>
        </Row>
      </Router>
    </div>
  );
}

export default Dashboard;

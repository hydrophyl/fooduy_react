import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Add from "./Add";
import Data from "./Data";
import GoodInputForm from './GoodInputForm'
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
              <Route exact path="/add/neweinkauf" component={GoodInputForm}></Route>
              <Route exact path="/data" component={Data}></Route>
            </Switch>
          </Col>
        </Row>
      </Router>
    </div>
  );
}

export default Dashboard;

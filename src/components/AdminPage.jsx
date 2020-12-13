import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import AdminAddPets from "./AdminAddPets";
import AdminDashboardPets from "./AdminDashboardPets";
import AdminDashboardUsers from "./AdminDashboardUsers";

class AdminPage extends React.Component {
  // Probably do not need a class here
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Tabs
        id="controlled-tab-example"
        activeKey={this.state.key}
        onSelect={(k) => this.setState({ key: k })}
      >
        <Tab eventKey="addPets" title="Add Pets">
          <div className="d-flex justify-content-center mt-3"></div>
          <AdminAddPets />
        </Tab>
        <Tab eventKey="adminDashboardPets" title="Dashboard Pets">
          <div className="d-flex justify-content-center mt-3"></div>
          <AdminDashboardPets />
        </Tab>
        <Tab eventKey="adminDashboardUsers" title="Dashboard Users">
          <div className="d-flex justify-content-center mt-3"></div>
          <AdminDashboardUsers />
        </Tab>
      </Tabs>
    );
  }
}

export default AdminPage;

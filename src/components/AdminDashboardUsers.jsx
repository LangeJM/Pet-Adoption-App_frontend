import React from "react";

import { Table } from "react-bootstrap";

const AdminDashboardUsers = (props) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Type</th>
          <th>Email</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Petsy</td>
          <td>Charisma</td>
          <td>Owner</td>
          <td>pet.Sy@charisma.com</td>
          <td>+001 53 24685587</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Petsy</td>
          <td>Charisma</td>
          <td>Owner</td>
          <td>pet.Sy@charisma.com</td>
          <td>+001 53 24685587</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Petsy</td>
          <td>Charisma</td>
          <td>Owner</td>
          <td>pet.Sy@charisma.com</td>
          <td>+001 53 24685587</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default AdminDashboardUsers;

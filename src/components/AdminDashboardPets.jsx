import React from "react";

import { Table } from "react-bootstrap";

const AdminDashboardPets = (props) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Status</th>
          <th>Type</th>
          <th>Breed</th>
          <th>Color</th>
          <th>Weight</th>
          <th>Height</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Petsy</td>
          <td>Fostered</td>
          <td>Cat</td>
          <td>Siamese</td>
          <td>White</td>
          <td>6 kg</td>
          <td>30 cm</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Joseph III.</td>
          <td>Adopted</td>
          <td>Dog</td>
          <td>Hanoverian Scenthound</td>
          <td>Mixed</td>
          <td>36 kg</td>
          <td>50 cm</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Dundee</td>
          <td>Available</td>
          <td>Crocodile</td>
          <td>Saltwater Crocodile</td>
          <td>Greenish</td>
          <td>500 kg</td>
          <td>40 cm</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default AdminDashboardPets;

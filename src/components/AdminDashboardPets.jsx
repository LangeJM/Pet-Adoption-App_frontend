import React from "react";

import { Table } from "react-bootstrap";
import { getPetsApi } from "../apis/apis";

class AdminDashboardPets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      petsData: "",
      isFetching: "", // show spinner etc...
    };
  }

  componentDidMount() {
    getPetsApi()
      .then((data) => this.setState({ petsData: data.data.data }))
      .catch((err) => console.log(err));
  }

  renderPetsTable() {
    if (this.state.petsData) {
      return this.state.petsData.map((pet, index) => {
        const { name, status, type, breed, color, weight, height, _id } = pet;
        return (
          <tr key={_id}>
            <td>{index + 1}</td>
            <td>{name}</td>
            <td>{status}</td>
            <td>{type}</td>
            <td>{breed}</td>
            <td>{color}</td>
            <td>{weight}</td>
            <td>{height}</td>
          </tr>
        );
      });
    }
  }

  render() {
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
        <tbody>{this.renderPetsTable()}</tbody>
      </Table>
    );
  }
}

export default AdminDashboardPets;

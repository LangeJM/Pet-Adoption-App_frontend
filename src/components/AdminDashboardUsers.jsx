import React from "react";

import { Table } from "react-bootstrap";
import { getUsersApi } from "../apis/apis";

class AdminDashboardUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usersData: "",
      isFetching: "",
    };
  }

  componentDidMount() {
    getUsersApi()
      .then((data) => this.setState({ usersData: data.data.data }))
      .catch((err) => console.log(err));
  }

  renderUsersTable() {
    if (this.state.usersData) {
      return this.state.usersData.map((user, index) => {
        const { firstName, lastName, type, email, phone, _id } = user;
        return (
          <tr key={_id}>
            <td>{index + 1}</td>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{type}</td>
            <td>{email}</td>
            <td>{phone}</td>
          </tr>
        );
      });
    }
  }

  render() {
    return (
      <div className="mx-5 ">
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
          <tbody>{this.renderUsersTable()}</tbody>
        </Table>
      </div>
    );
  }
}
export default AdminDashboardUsers;

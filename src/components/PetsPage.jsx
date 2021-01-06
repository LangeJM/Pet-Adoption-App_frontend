import React from "react";
import { Redirect } from "react-router-dom";

import { Tabs, Tab } from "react-bootstrap";
import PetCardsDeck from "./PetCardsDeck";
import { getUserPetsApi } from "../apis/apis";

class PetsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: "myPets",
      userPetsFostered: "",
      userPetsSaved: "",
    };
  }
  componentDidMount() {
    const { savedPets, fosteredPets } = this.props.userObject;
    getUserPetsApi(fosteredPets)
      .then((res) => {
        this.setState({ userPetsFostered: res.data.data });
      })
      .catch((err) => console.log(err));
    getUserPetsApi(savedPets)
      .then((res) => {
        this.setState({ userPetsSaved: res.data.data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    if (this.props.userObject.email) {
      return (
        <Tabs
          id="controlled-tab-example"
          activeKey={this.state.key}
          onSelect={(k) => this.setState({ key: k })}
        >
          <Tab eventKey="myPets" title="My Pets">
            <div className="d-flex justify-content-center mt-3">
              <PetCardsDeck
                petsArray={this.state.userPetsFostered}
                userObject={this.props.userObject}
                onUserPetsChange={this.props.onUserPetsChange}
              />
            </div>
          </Tab>
          <Tab eventKey="savedPets" title="Saved Pets">
            <div className="d-flex justify-content-center mt-3">
              <PetCardsDeck
                petsArray={this.state.userPetsSaved}
                userObject={this.props.userObject}
                onUserPetsChange={this.props.onUserPetsChange}
              />
            </div>
          </Tab>
        </Tabs>
      );
    } else return <Redirect to="/" />;
  }
}

export default PetsPage;

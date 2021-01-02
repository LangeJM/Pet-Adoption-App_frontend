import React from "react";
import { Redirect } from "react-router-dom";

import { Tabs, Tab } from "react-bootstrap";
import PetCardsDeck from "./PetCardsDeck";

class PetsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: "myPets",
      userPetsAdopted: [
        {
          image:
            "https://pet-images-itc.s3.us-east-2.amazonaws.com/image-1608985001421-cat.jpeg",
          name: "Petsy",
          breed: "Crossbreed",
          status: "Available",
          key: "5fe729aaabcad27facbbfe3d",
        },
      ],
      userPetsSaved: [
        {
          image:
            "https://pet-images-itc.s3.us-east-2.amazonaws.com/image-1608985001421-cat.jpeg",
          name: "Petsy",
          breed: "Crossbreed",
          status: "Available",
          key: "5fe729aaabcad27facbbfe3d",
        },
      ],
    };
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
              <PetCardsDeck petsArray={this.state.userPetsAdopted} />
            </div>
          </Tab>
          <Tab eventKey="savedPets" title="Saved Pets">
            <div className="d-flex justify-content-center mt-3">
              <PetCardsDeck petsArray={this.state.userPetsSaved} />
            </div>
          </Tab>
        </Tabs>
      );
    } else return <Redirect to="/" />;
  }
}

export default PetsPage;

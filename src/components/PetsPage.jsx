import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import PetCardsDeck from "./PetCardsDeck";

class PetsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: "home",
    };
  }

  render() {
    return (
      <Tabs
        id="controlled-tab-example"
        activeKey={this.state.key}
        onSelect={(k) => this.setState({ key: k })}
      >
        <Tab eventKey="myPets" title="My Pets">
          <PetCardsDeck />
        </Tab>
        <Tab eventKey="savedPets" title="Saved Pets">
          <PetCardsDeck />
        </Tab>
      </Tabs>
    );
  }
}

export default PetsPage;

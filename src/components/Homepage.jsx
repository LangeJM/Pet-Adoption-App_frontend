import React from "react";

import { getPetsSampleApi } from "../apis/apis";
import PetCardsDeck from "./PetCardsDeck";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: [],
      petsRandomSample: [],
    };
  }

  componentDidMount() {
    getPetsSampleApi()
      .then((data) => {
        this.setState({ petsRandomSample: data.data.data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="m-3">
        <div className="mb-5">
          <h1
            className="ml-5 pl-5 mt-5 text-left font-italic"
            style={{ color: "#000f70" }}
          >
            Find your new best friend today!
          </h1>
          <img
            src={
              "https://pet-images-itc.s3.us-east-2.amazonaws.com/Pets-Homepage.png"
            }
            className="img-fluid mb-5"
            alt="Group of pets"
          />

          <div className="text-left mx-5 px-5">
            <p className="font-weight-bold" style={{ color: "#000f70" }}>
              Adopting a pet will make you feel better
            </p>
            <p>
              Pets have a way of putting a smile on your face and a spring in
              your step. Not only do animals give you unconditional love, but
              research confirms that pets provide us humans with psychological,
              emotional, and physical benefits. Caring for a companion animal
              can provide a sense of purpose and fulfillment as well as lessen
              feelings of loneliness and isolation in all age groups.
            </p>
            <p className="font-weight-bold" style={{ color: "#000f70" }}>
              You will save a life
            </p>
            <p>
              Each year millions of pets are euthanized because too few people
              adopt from shelters. The number of euthanized animals could be
              reduced dramatically if more people adopted pets instead of buying
              them. By adopting from a humane society or private animal shelter
              such as
              <a className="" href="/">
                {" I-Pets "}
              </a>
              you will help save the lives of two animals – the pet you adopt,
              and a homeless animal somewhere who can be rescued because of the
              space you helped free up.
            </p>
            <p className="font-weight-bold" style={{ color: "#000f70" }}>
              When you adopt, you get a healthy pet
            </p>
            <p>
              Animal shelters are brimming with happy, healthy animals just
              waiting for someone to take them home. At
              <a className="" href="/">
                {" I-Pets "}
              </a>
              we examine, vaccinate, spay or neuter and microchip all of our
              pets prior to adoption. In addition to medical care, we also
              screen animals for specific temperaments and behaviors to make
              sure each family finds the right pet for its lifestyle.
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-left font-italic mb-4 ml-5 pl-5">
            Meet our pets:
          </h3>
          <div className="d-flex justify-content-center">
            <PetCardsDeck
              petsArray={this.state.petsRandomSample}
              userObject={this.props.userObject}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;

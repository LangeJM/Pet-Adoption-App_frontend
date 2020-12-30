import React from "react";

import { getPetsApi } from "../apis/apis";
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
    getPetsApi()
      .then((data) => {
        this.setState({ pets: data.data.data });
        this.setState({ petsRandomSample: this.getRandom(this.state.pets, 4) });
      })
      .catch((err) => console.log(err));
  }

  getRandom(arr, n) {
    // Taken from https://stackoverflow.com/a/19270021/12754665
    let result = new Array(n),
      len = arr.length,
      taken = new Array(len);
    if (n > len)
      throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
      const x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
  }

  render() {
    return (
      <div className="m-3">
        <div className="mb-5">
          <h2 className="mb-3">Welcome to I-Pets</h2>
          <div className="text-left">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              eget est dictum, sodales mauris et, tincidunt sem. Duis tempor,
              diam ac luctus cursus, justo ex iaculis magna, ut dignissim elit
              libero a magna. Donec semper lacinia nulla, sed venenatis nunc
              condimentum a. Morbi a nulla egestas, facilisis dolor eget, porta
              dolor. Praesent at lacinia ex.
            </p>
            <p>
              Vivamus scelerisque hendrerit egestas. Morbi tristique ante non
              aliquet cursus. Suspendisse dui nisl, malesuada quis enim ac,
              accumsan ultrices justo. Aliquam at erat lectus. Cras lobortis sem
              quis sem vulputate facilisis. Curabitur ante leo, fermentum eu
              nisi id, hendrerit elementum dolor. Mauris ut erat in risus
              consectetur imperdiet quis eu sem. Proin diam nisl, egestas ut
              venenatis eleifend, tempor ac felis. Integer lectus elit,
              vestibulum vel fringilla eget, vulputate vitae erat.
            </p>
            <p>
              Vestibulum in dui blandit, vestibulum turpis in, maximus velit.
              Praesent a scelerisque ex. Fusce a erat lorem. Donec risus lacus,
              sollicitudin vel faucibus in, vulputate in magna. Maecenas
              vulputate facilisis augue, ac lobortis orci lacinia volutpat.
              Nullam vulputate faucibus tellus vitae egestas. Maecenas aliquam
              tortor sit amet felis rhoncus aliquam. Fusce non ornare arcu. Duis
              in dolor elit. Duis non lorem in lorem semper commodo id vel quam.
              Mauris finibus sapien facilisis imperdiet porta. Morbi consectetur
              tristique semper. Ut dictum erat non felis facilisis aliquet.
              Maecenas a dignissim felis. Nullam vel imperdiet diam, vel
              suscipit mauris. Etiam fermentum aliquam neque in sodales. Sed
              fringilla aliquam ex at feugiat.
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <PetCardsDeck petsRandomSample={this.state.petsRandomSample} />
        </div>
      </div>
    );
  }
}

export default Homepage;

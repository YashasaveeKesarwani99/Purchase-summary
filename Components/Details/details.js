import React, { Component } from "react";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: false
    };
  }

  render() {
    if (this.state.detail === false) {
      return <div>See Item Details +</div>;
    } else if (this.state.details === true) {
      return (
        <div>
          <h3> Office Chair </h3>
          <div>
            <div>
              <div>
                <p>Height</p>
                <p> 135cm </p>
              </div>
              <div>
                <p>Breath</p>
                <p> 55cm </p>
              </div>
              <div>
                <p>Company</p>
                <p> Khousla </p>
              </div>
            </div>
            <div>
              <img src="" alt="nice" />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Details;

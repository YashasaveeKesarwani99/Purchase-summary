import React, { Component } from "react";
import "./details.css";
class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: false
    };
  }

  detailHandler = () => {
    const d = !this.state.detail;
    this.setState({ detail: d });
  };

  render() {
    if (this.state.detail === false) {
      return (
        <div className="parent_details" onClick={this.detailHandler}>
          See Item Details +
        </div>
      );
    } else if (this.state.detail === true) {
      return (
        <div onClick={this.detailHandler}>
          <h3> Office Chair </h3>
          <div className="container">
            <div className="body">
              <div className="child_details">
                <p>Height</p>
                <p> 135cm </p>
              </div>
              <div className="child_details">
                <p>Breath</p>
                <p> 55cm </p>
              </div>
              <div className="child_details">
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

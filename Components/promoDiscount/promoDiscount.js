import React, { Component } from "react";

class PromoDiscount extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="child">
        <p> Promocode </p>
        <p> {this.props.promo}</p>
      </div>
    );
  }
}
export default PromoDiscount;

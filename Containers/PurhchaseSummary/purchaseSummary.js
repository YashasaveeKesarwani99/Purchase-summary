import React, { Component } from "react";
import "./purchaseSummary.css";
import Details from "../../Components/Details/details";
import Discount from "../../Components/Discount/discount";
class PurchaseSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price_reduction: 0
    };
  }

  render() {
    let total = 102.96;
    let pickUp = -3.85;
    let estTotal = total - pickUp;
    return (
      <>
        <div className="parent">
          <div class="child">
            <p> Subtotal</p>
            <p> {total}</p>
          </div>
          <div className="child">
            <p> PickUp </p>
            <p> {pickUp}</p>
          </div>
          <div className="child">
            <p> Est. Total</p>
            <p> {estTotal.toFixed(2)}</p>
          </div>
        </div>
        <Details />
        <Discount />
      </>
    );
  }
}
export default PurchaseSummary;

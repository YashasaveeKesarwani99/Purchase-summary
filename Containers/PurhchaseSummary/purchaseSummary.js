import React, { Component } from "react";
import "./purchaseSummary.css";
import Details from "../../Components/Details/details";
class PurchaseSummary extends Component {
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
      </>
    );
  }
}
export default PurchaseSummary;

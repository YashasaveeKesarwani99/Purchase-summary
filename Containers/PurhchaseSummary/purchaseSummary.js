import React, { Component } from "react";
import Details from "../../Components/Details/details";
class PurchaseSummary extends Component {
  render() {
    let total = 102.96;
    let pickUp = -3.85;
    let estTotal = total - pickUp;
    return (
      <div>
        <div>
          <p> Subtotal</p>
          <p> {total}</p>
        </div>
        <div>
          <p> PickUp Savings</p>
          <p> {pickUp}</p>
        </div>
        <div>
          <p> Est. Total</p>
          <p> {estTotal}</p>
        </div>
        <Details />
      </div>
    );
  }
}
export default PurchaseSummary;

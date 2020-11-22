import React, { Component } from "react";
import "./purchaseSummary.css";
import PromoDiscount from "../../Components/promoDiscount/promoDiscount";
import Details from "../../Components/Details/details";
import Discount from "../../Components/Discount/discount";
class PurchaseSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price_reduction: 0,
      promo: 0
    };
  }

  discountHandler = (e) => {
    if (e) {
      this.setState({ promo: -2.5 });
    }
  };

  render() {
    let total = 102.96;
    let pickUp = -3.85;
    let estTotal = total - pickUp + this.state.promo;
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
          <PromoDiscount promo={this.state.promo} />
          <div className="child">
            <p> Est. Total</p>
            <p> {estTotal.toFixed(2)}</p>
          </div>
        </div>
        <Details />
        <Discount click={this.discountHandler} />
      </>
    );
  }
}
export default PurchaseSummary;

import React, { Component } from "react";
import { connect } from "react-redux";

class Discount extends Component {
  render() {
    if (this.state.expand === false) {
      return <div className="parent_details">Discount promocode +</div>;
    } else if (this.state.expand === true) {
      return (
        <input
          placeholder="Enter promocode"
          onChange={(e) => this.changeHandler(e)}
          value={this.props.value}
        />
      );
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeHandler: (e) =>
      dispatch({ type: "DISCOUNT", payload: e.target.value })
  };
};

const mapStateToProps = (state) => {
  return {
    value: state.discount
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Discount);

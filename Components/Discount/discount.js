import React, { Component } from "react";
import { connect } from "react-redux";
import "./discount.css";
import ChangeHandler from "../../Actions/actions";
class Discount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: true,
      boolean: false
    };
  }

  applyHandler = () => {
    if (this.props.value === "DISCOUNT") {
      this.setState({ boolean: true });
      this.props.click(this.state.boolean);
    }
  };

  render() {
    if (this.state.expand === false) {
      return <div className="parent_details">Discount promocode +</div>;
    } else if (this.state.expand === true) {
      return (
        <>
          <input
            placeholder="Enter promocode"
            className="input"
            onChange={(e) => this.props.ChangeHandler(e)}
          />
          <input
            className="input2"
            type="submit"
            value="Apply"
            onClick={this.applyHandler}
          />
        </>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    value: state.discount
  };
};

export default connect(mapStateToProps, { ChangeHandler })(Discount);

import React, { Component } from "react";
import { connect } from "react-redux";
import ChangeHandler from "../../Actions/actions";
class Discount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: true
    };
  }

  render() {
    if (this.state.expand === false) {
      return <div className="parent_details">Discount promocode +</div>;
    } else if (this.state.expand === true) {
      return (
        <>
          <input
            placeholder="Enter promocode"
            onChange={(e) => this.props.ChangeHandler(e)}
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

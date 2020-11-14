import React from "react";

const initialState = {
  discount: ""
};

const Reducer = (state = initialState, action) => {
  if (action.type === "DISCOUNT") {
    return {
      ...state,
      discount: action.payload
    };
  }
};

export default Reducer;

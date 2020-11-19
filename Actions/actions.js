const changeHandler = (e) => (dispatch) => {
  dispatch({
    type: "DISCOUNT",
    payload: e.target.value
  });
};

export default changeHandler;

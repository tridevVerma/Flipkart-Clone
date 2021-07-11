export const removeFromCart = (id) => async (dispatch) => {
  dispatch({ type: "REMOVEFROMCART", payload: id });
};

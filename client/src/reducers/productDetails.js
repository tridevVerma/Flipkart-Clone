const initialState = { data: {} };

const productDetails = (state = initialState, action) => {
  switch (action.type) {
    case "PRODUCTDETAILS":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default productDetails;

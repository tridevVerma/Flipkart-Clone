const initialState = { data: [] };

const products = (state = initialState, action) => {
  switch (action.type) {
    case "LOADPRODUCTS":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default products;

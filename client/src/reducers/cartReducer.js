const initialState = { itemsList: [] };

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDTOCART": {
      if (state.itemsList.find((product) => product.id === action.payload.id)) {
        return state;
      }
      return {
        ...state,
        itemsList: [...state.itemsList, action.payload],
      };
    }
    case "REMOVEFROMCART": {
      return {
        ...state,
        itemsList: state.itemsList.filter((item) => item.id !== action.payload),
      };
    }
    default:
      return state;
  }
};

export default cartReducer;

import { combineReducers } from "redux";
import currentUser from "./currentUser";
import products from "./products";
import productDetails from "./productDetails";
import cartReducer from "./cartReducer";
import loginDialog from "./loginDialog";

const rootReducer = combineReducers({
  currentUser,
  products,
  productDetails,
  cartReducer,
  loginDialog,
});

export default rootReducer;

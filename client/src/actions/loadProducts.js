import axios from "axios";
import URL from "../backendURL";

export const getProductsData = () => async (dispatch) => {
  try {
    const { data } = await axios.get(URL + "/products");
    dispatch({ type: "LOADPRODUCTS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

import axios from "axios";
import URL from "../backendURL";

export const getProductDetails = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(URL + `/products/${id}`);
    dispatch({ type: "PRODUCTDETAILS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

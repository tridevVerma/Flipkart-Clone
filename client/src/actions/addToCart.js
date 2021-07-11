import axios from "axios";
import URL from "../backendURL";

export const addToCart = (id) => async (dispatch) => {
  const { data } = await axios.get(URL + `/products/${id}`);
  dispatch({ type: "ADDTOCART", payload: data });
};

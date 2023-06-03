import { toast } from "react-hot-toast";

import axios from "axios";

// TODO{<---------------General Loading Reducer---------------->}
import {
  GeneralLoadingTrue,
  GeneralLoadingFalse,
} from "../../Reducers/generalLoading";

export const deleteProduct_admin = (productId) => async (dispatch) => {
  try {

    const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        }
       
      }
    dispatch(GeneralLoadingTrue());
    const { data } = await axios.delete(`/api/v1/admin/deleteProduct/${productId}`,config);
    if (data.success===true) {
        toast.success(data.message);
    }
    dispatch(GeneralLoadingFalse());
  } catch (error) {
    console.log(error.response.data);
    dispatch(GeneralLoadingFalse());
    toast.error(error.response.data.message, {
      duration: 5000,
    });
  }
};
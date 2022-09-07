import { CommonActions } from "@react-navigation/native";
import { setUsermobile } from "../../utils/asyncStorage";
import { GET, POST } from "../../utils/responseHelper";
import {  LOGIN   } from "../Types";

const dispatchAction = (dispatch, actionType, data) => {
  dispatch({
    type: actionType,
    payload: data,
  });
};


export const sendLoginOtp = (postObj) => async (dispatch) => {
  const url = "/auth/otp";
  try {
    const data = await POST(url, postObj.data);
    if (data?.success) {
      // dispatchAction(dispatch, TOAST, {
      //   message: "Success",
      //   message2: data?.message,
      //   type: "success",
      // });
    } else {
      // dispatchErrorAction(dispatch, data?.message);
    }
  } catch (error) {
    // dispatchErrorAction(dispatch, "Something went wrong!");
  }
};

export const sendSignUpOtp = (postObj) => async (dispatch) => {
  const url = "/customer/otp";
  try {
    const data = await POST(url, postObj.data);
    if (data?.success) {

      // dispatchAction(dispatch, TOAST, {
      //   message: "Success",
      //   message2: data?.message,
      //   type: "success",
      // });
    } else {
      // dispatchErrorAction(dispatch, data?.message);
    }
  } catch (error) {
    // dispatchErrorAction(dispatch, "Something went wrong!");
  }
};



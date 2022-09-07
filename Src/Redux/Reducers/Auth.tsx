import {

  LOGIN,
 
} from "../Types/index";

const initialstate = {
  user: {},

};

type Action = {
  type: string;
  payload?: any;
};

export default (state: any = initialstate, action: Action) => {
  switch (action.type) {
    case LOGIN: {
      // setToken(action.payload.token);
      // setUser(JSON.stringify(action.payload));
      return {
        ...state,
        user: action.payload,
        token: action.payload.token,
        user_id: action.payload.user_id,
        loginStatus: true,
        loading: false,
      };
    }

    default:
      return state;
  }
};

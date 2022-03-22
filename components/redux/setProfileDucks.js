import { io } from "socket.io-client";
// Constants
const dataInicial = {
  profile: [],
};

// types
const SET_PROFILE_SUCCESS = "SET_PROFILE_SUCCESS";

// reducer
export default function filesReducer(state = dataInicial, action) {
  switch (action.type) {
    case SET_PROFILE_SUCCESS:
      return { ...state, profile: action.payload };
    default:
      return state;
  }
}

// actions
export const setProfileAction =
  ({ name }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: SET_PROFILE_SUCCESS,
        payload: name,
      });
    } catch (error) {
      console.log(error);
    }
  };

import usersData from "./usersData.json";

// Constants
const dataInicial = {
  users: [],
};

// types
const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";

// reducer
export default function filesReducer(state = dataInicial, action) {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return { ...state, users: action.payload };
    default:
      return state;
  }
}

// actions
export const getUsersAction = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_USERS_SUCCESS,
      payload: usersData["results"],
    });
  } catch (error) {
    console.log(error);
  }
};

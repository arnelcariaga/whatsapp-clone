// Constants
const dataInicial = {
  socket: [],
};

// types
const SET_SOCKET_SUCCESS = "SET_SOCKET_SUCCESS";

// reducer
export default function filesReducer(state = dataInicial, action) {
  switch (action.type) {
    case SET_SOCKET_SUCCESS:
      return { ...state, socket: action.payload };
    default:
      return state;
  }
}

// actions
export const setSocketAction = (socket) => async (dispatch) => {
  try {
    dispatch({
      type: SET_SOCKET_SUCCESS,
      payload: socket,
    });
  } catch (error) {
    console.log(error);
  }
};

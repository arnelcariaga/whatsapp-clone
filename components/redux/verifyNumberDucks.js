// Constants
const dataInicial = {
  number: null,
};

// types
const SET_NUMBER_SUCCESS = "SET_NUMBER_SUCCESS";

// reducer
export default function filesReducer(state = dataInicial, action) {
  switch (action.type) {
    case SET_NUMBER_SUCCESS:
      return { number: action.payload };
    default:
      return state;
  }
}

// actions
export const setNumberVerificationAction = (number) => async (dispatch) => {
  try {
    dispatch({
      type: SET_NUMBER_SUCCESS,
      payload: number,
    });
  } catch (error) {
    console.log(error);
  }
};

import { ADD_SHARES_TO_STATE } from "../actions/sharesActions";

const initialState = [];

const sharesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SHARES_TO_STATE: {
      return [...state, action.payload];
    }
    default:
      return state;
  }
};

export default sharesReducer;

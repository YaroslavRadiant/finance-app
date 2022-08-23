import {
  ADD_CHECKBOX_TO_STATE,
  CHANGE_ONE_CHECKBOX_STATUS,
} from "../actions/checkboxActions";

const initialState = [];

const sharesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHECKBOX_TO_STATE: {
      return [...state, action.payload];
    }
    case CHANGE_ONE_CHECKBOX_STATUS: {
      let newStateArray = state.map((item) => {
        return Object.keys(item)[0] === Object.keys(action.payload)[0]
          ? action.payload
          : item;
      });
      return newStateArray;
    }
    default:
      return state;
  }
};

export default sharesReducer;

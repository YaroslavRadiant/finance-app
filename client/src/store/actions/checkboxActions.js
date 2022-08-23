export const ADD_CHECKBOX_TO_STATE = "ADD_CHECKBOX_TO_STATE";
export const CHANGE_ONE_CHECKBOX_STATUS = "CHANGE_ONE_CHECKBOX_STATUS";

export const addCheckboxToState = (payload) => {
  return { type: ADD_CHECKBOX_TO_STATE, payload };
};

export const changeOneCheckboxStatus = (payload) => {
  return { type: CHANGE_ONE_CHECKBOX_STATUS, payload };
};

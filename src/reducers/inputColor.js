import initialState from "../store/initialState";
import { ADD_COLOR } from "../action/types";

const inputColor = (state = initialState.inputColor, action) => {
  switch (action.type) {
    case ADD_COLOR:
      return { ...state, backgroundColor: action.color };
    default:
      return state;
  }
};
export default inputColor;

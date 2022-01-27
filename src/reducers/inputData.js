import initialState from "../store/initialState";
import {
  ADD_DATA,
  DECREMENT_ROUNDS,
  RIGHT_CLICK_COUNT,
  WRONG_CLICK_COUNT,
} from "../action/types";

const inputData = (state = initialState.inputData, action) => {
  switch (action.type) {
    case ADD_DATA:
      return {
        ...state,
        duration: action.duration,
        rounds: action.rounds,
        allRounds: action.rounds,
      };
    case DECREMENT_ROUNDS:
      return { ...state, rounds: state.rounds - 1 };
    case RIGHT_CLICK_COUNT:
      return {
        ...state,
        rightClicks: state.rightClicks + 1,
        rounds: state.rounds - 1,
      };
    case WRONG_CLICK_COUNT:
      return {
        ...state,
        wrongClicks: state.wrongClicks + 1,
        rounds: state.rounds - 1,
      };
    default:
      return state;
  }
};

export default inputData;

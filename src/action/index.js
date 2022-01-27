import {
  ADD_DATA,
  ADD_COLOR,
  DECREMENT_ROUNDS,
  RIGHT_CLICK_COUNT,
  WRONG_CLICK_COUNT,
} from "./types";

export const addData = (duration, rounds) => ({
  type: ADD_DATA,
  duration,
  rounds,
});

export const setRounds = () => ({
  type: DECREMENT_ROUNDS,
});

export const setRightClicks = () => ({
  type: RIGHT_CLICK_COUNT,
});

export const setWrongClicks = () => ({
  type: WRONG_CLICK_COUNT,
});

export const addColor = (color) => ({
  type: ADD_COLOR,
  color,
});

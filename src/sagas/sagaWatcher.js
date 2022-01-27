import { put, takeEvery, select, delay, race, take } from "redux-saga/effects";
import { setRounds } from "../action";
import { ADD_COLOR } from "../action/types";

export function* sagaWatcher() {
  yield takeEvery(ADD_COLOR, setColorWorker);
}

function* setColorWorker() {
  const data = yield select();
  const { rightClick, wrongClick, timeOut } = yield race({
    rightClick: take("RIGHT_CLICK_COUNT"),
    wrongClick: take("WRONG_CLICK_COUNT"),
    timeOut: delay(data.inputData.duration),
  });
  if (rightClick) {
    console.log("right click");
  }
  if (wrongClick) {
    console.log("wrong click");
  }
  if (timeOut) {
    yield put(setRounds());
  }
}

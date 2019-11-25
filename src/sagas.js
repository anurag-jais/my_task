import { takeLatest, put, call } from "redux-saga/effects";
const api = require("./api");
export function* fetchUserDetails() {
  console.log("here");
  try {
    console.log("try");
    const response = yield call(api.fetchUser);
    console.log("fvblfkv;jvb>>>>>>>>>>>>..", response.data);
    const users = response.data;
    // dispatch a success action to the store
    yield put({ type: "FETCH_USERS_SUCCESS", users: users });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "RECORDS/FETCH_FAILED", error });
  }
}

export function* watchUserFetchRequest() {
  console.log("running");
  yield takeLatest("FETCH_USERS", fetchUserDetails);
}

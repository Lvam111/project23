import { call, put, takeLatest, fork, takeEvery } from "redux-saga/effects";
import devActions, { Types } from "../reduxFolder/developerReducer";
import {
  getDevelopers,
  postDeveloper,
  deleteDeveloper,
  editDeveloper,
} from "../api/developers";

//workers
function* getDevelopersWorker() {
  try {
    const developers = yield call(getDevelopers);
    yield put(devActions.getAllDevsSuccessActionCreator(developers));
  } catch (err) {
    console.log("error occuured fetching developers" + err);
  }
}
function* postDeveloperWorker({ developer }) {
  try {
    yield call(postDeveloper, developer);
  } catch (err) {
    console.log("error occuured posting developers" + err);
  }
}
function* deleteDeveloperWorker({ id }) {
  try {
    yield call(deleteDeveloper, id);
    yield put(devActions.getAllDevsRequestActionCreator());
  } catch (err) {
    console.log("error occuured deleting developer" + err);
  }
}
function * editDeveloperWorker({id,developer}){
      try{
            yield call(editDeveloper,id,developer)

      }catch(err){
            console.log("error occuured editing developer" + err);  
      }
}

//watchers

function* watchGetAllDevsRequest() {
  yield takeLatest(Types.GET_ALL_DEVS_REQUEST, getDevelopersWorker);
}
function* watchAddOneDevRequest() {
  yield takeLatest(Types.Add_ONE_DEV_REQUEST, postDeveloperWorker);
}
function* watchDeleteOneDevRequest() {
  yield takeLatest(Types.DELETE_ONE_DEV_REQUEST, deleteDeveloperWorker);
}
function* watchEditOneDevRequest(){
      yield takeLatest(Types.UPDATE_ONE_DEV,editDeveloperWorker)
}

const developerSagas = [
  fork(watchAddOneDevRequest),
  fork(watchGetAllDevsRequest),
  fork(watchDeleteOneDevRequest),
  fork(watchEditOneDevRequest)
];
export default developerSagas;

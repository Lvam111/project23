import { all } from "redux-saga/effects";
import developerSagas from "./developer";

export default function* rootSaga(){
      yield all([
            ...developerSagas
            //...teachersSagas
      ])
}
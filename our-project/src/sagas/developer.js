import {call,put,takeLatest,fork} from 'redux-saga/effects'
import devActions,{Types} from '../reduxFolder/developerReducer'
import { getDevelopers,postDeveloper } from '../api/developers'



//workers
function* getDevelopersWorker(){
      try{
            const developers = yield call(getDevelopers)
            yield put(devActions.getAllDevsSuccessActionCreator(developers))
      }catch(err){
            console.log('error occuured fetching developers'+err);

      }
}
function* postDeveloperWorker({developer}){
      try{
            yield call(postDeveloper,developer)
      }catch(err){
            console.log('error occuured posting developers'+err);

      }
}

//watchers

function* watchGetAllDevsRequest(){
      yield takeLatest(Types.GET_ALL_DEVS_REQUEST,getDevelopersWorker)
}
 function* watchAddOneDevRequest(){
      yield takeLatest(Types.Add_ONE_DEV_REQUEST,postDeveloperWorker)
}

const developerSagas=[
      fork(watchAddOneDevRequest),
      fork(watchGetAllDevsRequest)
]
export default developerSagas;
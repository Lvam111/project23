import devActions from "../reduxFolder/developerReducer"
import rootSaga from "../sagas"
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: devActions.reducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);



export const AppProviders = ({ children }) => {
      return (
        <Provider store={store}>
          {children}
        </Provider>
      )
    }
    
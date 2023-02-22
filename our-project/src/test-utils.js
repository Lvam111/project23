// import { ReactElement } from 'react'
import { configureStore } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
// import { AppProviders } from "./providers/AppProviders";
import devActions from "./reduxFolder/developerReducer";


const initialState = { 
      developers: [{id:123, text:'hello', completed: false}] ,
      teachers:[]
    };
function customRender(
  ui,
  {
    preloadedState,
    store = configureStore({ reducer: devActions, preloadedState }),
    ...renderOptions
  }={}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return render(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from "@testing-library/react";
export { customRender as render };

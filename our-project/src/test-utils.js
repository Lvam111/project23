// import { ReactElement } from 'react'
import { configureStore } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { AppProviders } from "./providers/AppProviders";
import devActions from "./reduxFolder/developerReducer";


const customRender = (ui, options) =>
  render(ui, { wrapper: AppProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };

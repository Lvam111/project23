// import React from 'react';
import {  fireEvent,render, screen, cleanup } from "./test.utils";
import ListDeveloper from "../components/ListDeveloper";
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';


describe('ButtonLogin', () => {
  test('should pass', () => {
    const history = createMemoryHistory({ initialEntries: ['/'] });
    const { getByText } = render(
      <Router history={history}>
        <ListDeveloper />
      </Router>
    );
    expect(history.location.pathname).toBe('/');
    fireEvent.click(getByText('Add'));
    expect(history.location.pathname).toBe('/Add');
  });
});





// test("list developer should render", () => {
//   render(<ListDeveloper />);
//   const listVar = screen.getByTestId("list-1");
//   expect(listVar).toBeInTheDocument();
//   expect(listVar).toHaveTextContent("Helo world");
// });

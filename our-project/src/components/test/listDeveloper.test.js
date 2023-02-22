import { screen, render } from "../../test-utils";
import ListDeveloper from "../ListDeveloper";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
describe("listdeveloper", () => {
  test("renders correctly", () => {
    const history = createMemoryHistory({ initialEntries: ["/"] });

    render(
      <Router history={history}>
        <ListDeveloper />
      </Router>
    );
    const h1 = screen.getByRole("heading");
    expect(h1).toBeInTheDocument();
  });
});
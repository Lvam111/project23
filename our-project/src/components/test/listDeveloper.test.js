import { screen, render } from "../../test-utils";
import ListDeveloper from "../ListDeveloper";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
describe("listdeveloper", () => {
  test("renders correctly", () => {
    const history = createMemoryHistory();

    render(
      <Router location={history.location} navigator={history}>
        <ListDeveloper />
      </Router>
    );
    const h1 = screen.getByRole("heading");
    expect(h1).toBeInTheDocument();
    const btn = screen.getByRole("button");
    expect(btn).toBeInTheDocument();
    const th = screen.getByRole("columnheader", { name: "id" });
    expect(th).toBeInTheDocument();
    const tr = screen.getByRole("row");
    expect(tr).toBeInTheDocument();
  });
});

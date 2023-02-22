import logo from "./logo.svg";
import ListDeveloper from "./components/ListDeveloper";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AddDeveloper from "./components/AddDeveloper";
import UpdateDev from "./components/UpdateDev";

function App() {
  return (
    <Router>
    <div className="App">
      hi
     </div>
      <Routes>
        <Route path="/" exact element ={<ListDeveloper/>}></Route>
        <Route path='/Add' exact element ={<AddDeveloper/>}></Route>
        <Route path='/update/:id' exact element ={<UpdateDev/>}></Route>
      </Routes>
    </Router>
 
  );
}

export default App;

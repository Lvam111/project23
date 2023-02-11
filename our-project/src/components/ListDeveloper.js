import React, { useEffect } from "react";
import { connect } from "react-redux";
import Developer from "./Developer";
import devActions from "../reduxFolder/developerReducer";
import { useNavigate } from "react-router-dom";

function ListDeveloper({ developers, fetchDevelopers }) {
  const navigate = useNavigate();
  useEffect(() => {
    fetchDevelopers();
    //  fetch("http://localhost:3000/developers")
    //   .then((res) => res.json())
    //   .then((resObj) => {
    //     addDevstoStore(resObj.developers);
    //   })
    //   .catch((err) => console.log(err, "error in listdevelopers 11"));
  }, []);

  return (
    <div>
      <div>
        {" "}
        ListDevelopes<button onClick={() => navigate("/Add")}>Add</button>
      </div>

      <table>
        <tbody>
          <tr>
            <th>name</th>
            <th>language</th>
            <th>id</th>
            <th>delete</th>
            <th>update</th>
          </tr>
          {developers ? (
            developers.map((dev) => {
              return <Developer developer={dev} key={dev.id} />;
            })
          ) : (
            <tr></tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default connect(
  ({ developers }) => ({
    developers,
  }),
  {
    fetchDevelopers: devActions.getAllDevsRequestActionCreator,
  }
)(ListDeveloper);

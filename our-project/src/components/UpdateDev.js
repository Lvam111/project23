import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import devActions from "../reduxFolder/developerReducer";
import { useNavigate, useParams } from "react-router-dom";

function UpdateDev({ developers, updateStorebyId }) {
  const navigate = useNavigate()
  const [selectedDeveloper, setSelectedDeveloper] = useState({
    name: "",
    // id: "",
    language: "",
  });
  const { id } = useParams();
  useEffect(() => {
    const developer = developers.find((dev) => dev.id === id);
    setSelectedDeveloper(developer);
    console.log(developer);/////////////////null
  }, []);
  const handleUpdate = (event) => {
    event.preventDefault()
     fetch(`http://localhost:3000/developers/${selectedDeveloper.id}`, {
      method: "PUT",
      headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
          },
      body: JSON.stringify(selectedDeveloper),
    })
    .then(res=>res.json())
    .then((res) => {
      console.log(res.developer,'31 here')
      updateStorebyId(selectedDeveloper.id, res.developer)
      console.log(developers,'updated devs 31')
      navigate("/")
    })
    .catch((err) => console.log(err, "error from 12 updating"));
    
  };
  const handleChange = (ev) => {
    setSelectedDeveloper({
      ...selectedDeveloper,
      [ev.target.name]: ev.target.value,
    });
  };
  return (
    <div>
      <form onSubmit={handleUpdate}>
        <input
          name="name"
          value={selectedDeveloper.name}
          onChange={handleChange}
        ></input>
        {/* <input
          name="id"
          value={selectedDeveloper.id}
          onChange={handleChange}
        ></input> */}
        <input
          name="language"
          value={selectedDeveloper.language}
          onChange={handleChange}
        ></input>
        <button type="submit"> update</button>
      </form>
    </div>
  );
}

export default connect(
  ({ developers }) => ({
    developers,
  }),
  {
    updateStorebyId: devActions.updateOneDevActionCreator,
  }
)(UpdateDev);

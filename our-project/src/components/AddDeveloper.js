import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import devActions from "../reduxFolder/developerReducer";

function AddDeveloper({ addnewDevToStore }) {
  const navigate = useNavigate()
  const [developer, setDeveloper] = useState({
    name: "",
    language: "",
    technologies: [{ techName: "ab", techVersion: "1" }],
  });
  const handleChange = (e) => {
      
    if (e.target.name === "techName") {
      setDeveloper({
        ...developer,
        technologies: [
          { ...developer.technologies[0], techName: e.target.value },
        ],
      });
    } else if (e.target.name === "version") {
      setDeveloper({
        ...developer,
        technologies: [
          { ...developer.technologies[0], techVersion: e.target.value },
        ],
      });
    } else {
      setDeveloper({ ...developer, [e.target.name]: e.target.value });
    }
  };
  const handleSubmit = (event) => {
      event.preventDefault()
      addnewDevToStore(developer)
    // const id = JSON.stringify(Date.now())
    //  fetch("http://localhost:3000/developers", {
    //   method: "POST",
    //   headers: {
    //         Accept: "application/json",
    //         "Content-Type": "application/json;charset=UTF-8",
    //       },
    //   body: JSON.stringify({ ...developer, id }),
    // })
    // .then(res=>res.json())
    // .then((resObj) => {
    //   addnewDevToStore(resObj.developer);
       navigate("/")
    // });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="name"
          onChange={(e) => {
            handleChange(e);
          }}
        ></input>
        <br />
        <input
        type ="password"
          name="password"
          placeholder="password"
          onChange={(e) => {
            handleChange(e);
          }}
        ></input>
        <br />
        <input
          name="language"
          placeholder="language"
          onChange={(e) => {
            handleChange(e);
          }}
        ></input>
        <br />
        <input
          name="techName"
          placeholder="techology"
          onChange={(e) => {
            handleChange(e);
          }}
        ></input>
        <br />
        <input
          name="techVersion"
          placeholder="technology version"
          onChange={(e) => {
            handleChange(e);
          }}
        ></input>
        <button type='submit'>Add developer</button>
      </form>
    </div>
  );
}

export default connect(null, {
  addnewDevToStore: devActions.addOneDevRequestActionCreator
})(AddDeveloper);

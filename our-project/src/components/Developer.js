import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import devActions from "../reduxFolder/developerReducer";

function Developer({ developer, deleteDevFromStore }) {
  const navigate = useNavigate()
  const deleteFun = async () => {
    console.log(developer.id)
    await deleteDevFromStore(developer.id)
   
    // fetch(`http://localhost:3000/developers/${developer.id}`, {
    //   method: "DELETE",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json;charset=UTF-8",
    //   },
    // })
    //   .then(res => res.json()) 
    //   .then(res=>res.success && deleteDevFromStore(developer.id))
    //   .then(res=>console.log(res))
    //   .catch(err=>console.log(err,'err in deleting 12'));
  };
  const handleEdit = () =>{
    navigate(`/update/${developer.id}`)
  }
  return (
    <>
      <tr>
        <td>{developer.name}</td>
        <td>{developer.language}</td>
        <td>{developer.id}</td>
        <td>
          <button onClick={deleteFun}>----</button>
        </td>
        <td>
          <button onClick={handleEdit}>edit</button>
        </td>
      </tr>
    </>
  );
}

export default connect(null, {
  deleteDevFromStore: devActions.deleteOneDevRequestActionCreator,

})(Developer);

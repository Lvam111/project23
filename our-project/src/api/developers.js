
const apiVariable = 'http://localhost:3000/developers'
export const getDevelopers=()=>{
      return fetch(`${apiVariable}`)
      .then(res=>res.json())
      .then(res=>res.developers)
      .catch(error=>console.log(`error while fetching in api ${error}`))
}




export const postDeveloper=(developer)=>{
      const id = JSON.stringify(Date.now())
    return fetch("http://localhost:3000/developers", {
      method: "POST",
      headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
          },
      body: JSON.stringify({ ...developer, id }),
    })
    .then(res=>res.json())
    .then((resObj) => 
      resObj.developer
    )
}

export const deleteDeveloper=(id)=>{
  return fetch(`http://localhost:3000/developers/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    })
      .then(res => res.json()) 
      .then(res=>res.success)
      .catch(err=>console.log(err,'err in deleting 12'));
}
export const editDeveloper=(id,selectedDeveloper)=>{
  return fetch(`http://localhost:3000/developers/${id}`, {
      method: "PUT",
      headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
          },
      body: JSON.stringify(selectedDeveloper),
    })
    .then(res=>res.json())
    .then((res) => res.success
    )
    .catch((err) => console.log(err, "error from 12 updating"));
}
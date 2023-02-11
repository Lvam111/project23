
const apiVariable = 'http://localhost:3000/developers'
export const getDevelopers=()=>{
      return fetch(`${apiVariable}`)
      .then(res=>res.json())
      .then(res=>res.developers)
      .catch(error=>console.log(`error while fetching in api ${error}`))
}




export const postDeveloper=(developer)=>{
      const id = JSON.stringify(Date.now())
     fetch("http://localhost:3000/developers", {
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
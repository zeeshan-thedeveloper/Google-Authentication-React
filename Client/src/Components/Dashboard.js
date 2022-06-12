const Dashboard = ()=>{

  const checkForLoginStatus = async (event) => {
    const response = await fetch(
      "http://localhost:8000/amILoggedIn",
      {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "no-cors", // no-cors, *cors, same-origin
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({}), // body data type must match "Content-Type" header
      }
    ).catch((error)=>{
        console.log(error);
    })
    if(response){
        console.log(response)
        // const resp = await response.json();
        // console.log("RESPONSE")
        // console.log(resp);
    }
   
    // setResponseFromServer(resp.status);
  };
  checkForLoginStatus();
    return <div>
        <h1>This is dashboard</h1>
        <a href="http://localhost:8000/logout">Logout</a>
    </div>
}

export default Dashboard;
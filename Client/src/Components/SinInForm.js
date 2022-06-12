import { Card, CardContent, Divider, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Headings } from "../Support/Headings/Headings";
import { lightBorder } from "../Theme/borders";
import { SimpleTextField } from "../Support/TextFields/TextFields";
import { SimpleLinks } from "../Support/Link/Links";
import { SimpleButton } from "../Support/Buttons/Buttons";
import { gapi } from "gapi-script";
import { GoogleLogout } from "react-google-login";
function SinInForm(props) {
  const [email, setEmail] = useState();
  const [password, setpassword] = useState();
  const [responseFromServer, setResponseFromServer] = useState("");


  //   const handelLoginWithGoogle = async (event) => {
  //     // const data = {
  //     //   userEmail: email,
  //     //   userPassword: password,
  //     // }; 
  //     const response = await fetch(
  //       "http://localhost:8000/auth/google",
  //       {
  //         method: "POST", // *GET, POST, PUT, DELETE, etc.
  //         mode: "no-cors", // no-cors, *cors, same-origin
  //         headers: {
  //           "Content-Type": "application/json",
  //           // 'Content-Type': 'application/x-www-form-urlencoded',
  //         },
  //         body: JSON.stringify({}), // body data type must match "Content-Type" header
  //       }
  //     );
  //     const resp = await response;
  //     console.log(resp);
  //     // setResponseFromServer(resp.status);
  //   };
  //    const  signOut = async()=> {
  //     const response = await fetch(
  //               "http://localhost:8000/logout",
  //               {
  //                 method: "POST", // *GET, POST, PUT, DELETE, etc.
  //                 mode: "cors", // no-cors, *cors, same-origin
  //                 credentials: 'same-origin',
  //                 headers: {
  //                   "Content-Type": "application/json",
  //                 //   'Content-Type': 'application/x-www-form-urlencoded',
  //                 },
  //                 redirect: 'follow', // manual, *follow, error
  //                 referrerPolicy: 'no-referrer',
  //                 body: JSON.stringify({}), // body data type must match "Content-Type" header
  //               }
  //             );
  //         const resp = await response.json();
  //         console.log("Response on logout",resp)
  //   }

  useEffect(()=>{
    gapi.load("client:auth2", () => {
        gapi.auth2.init({
        clientId:"1021611673334-u2t2m3kok0hu1emnnpfs2oqu6gb1bi0d.apps.googleusercontent.com"
    });
    });
  },[])

  const signuot = ()=>{
    const auth2 = window.gapi.auth2.getAuthInstance()
    if (auth2 != null) {
        alert("Its not null")
        auth2.signOut().then(function () {
            alert("Signed out")
            auth2.disconnect();
            gapi.auth2.getAuthInstance().signIn({
                prompt: 'select_account'
            });
        });
    //   auth2.signOut().then(
    //     auth2.disconnect().then((resp)=>{
    //         console.log("Response on logout",resp)
    //     })
    //   )
    }
  }

 
  return (
    <div>
      {/* Title */}
      <div style={{ padding: "1rem" }}>
        <Headings text={"Sin in"} fontSize={30} fontWeight={"bold"} />
      </div>
      <Divider />
      <Grid container>
        <Grid item xs={12} style={{ padding: "1rem", backgroundColor: "" }}>
          <SimpleTextField
            value={email}
            setValue={setEmail}
            label="Email"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} style={{ padding: "1rem", backgroundColor: "" }}>
          <SimpleTextField
            value={password}
            setValue={setpassword}
            label="Password"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <SimpleButton
            name="Sin in"
            handelClick={(e) => {
              // setDoHaveAccount(!doHaveAccount)
              //   handelSinInEvent(e);
            }}
          />
        </Grid>
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <SimpleButton
            name="Logout"
            handelClick={(e) => {
                signuot();
            }}
          />
          {/* <GoogleLogout
            clientId="1021611673334-u2t2m3kok0hu1emnnpfs2oqu6gb1bi0d.apps.googleusercontent.com"
            buttonText="Logout"
            onLogoutSuccess={logout}
          ></GoogleLogout> */}
        </Grid>
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <SimpleLinks
            name={"Don't have account ?"}
            handelClick={() => {
              props.setDoHaveAccount(!props.doHaveAccount);
            }}
          />
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={4} style={{ textAlign: "center", marginTop: "5%" }}>
          <a href="http://localhost:8000/auth/google">
            <div
              style={{ cursor: "pointer" }}
              onClick={() => {
                //  Login with google
                // handelLoginWithGoogle();
                // window.href='http://localhost:8000/auth/google'
              }}
            >
              <img src="https://img.icons8.com/color/48/undefined/google-logo.png" />
            </div>
          </a>
        </Grid>

        <Grid item xs={4} style={{ textAlign: "center", marginTop: "5%" }}>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => {
              //  Login with github
            }}
          >
            <img src="https://img.icons8.com/ios-filled/50/undefined/github.png" />
          </div>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={12} style={{ textAlign: "center" }}>
          {responseFromServer}
        </Grid>
      </Grid>
    </div>
  );
}

export default SinInForm;

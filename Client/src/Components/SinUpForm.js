import { Card, CardContent, colors, Divider, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Headings } from "../Support/Headings/Headings";
import { lightBorder } from "../Theme/borders";
import { SimpleTextField } from "../Support/TextFields/TextFields";
import { SimpleLinks } from "../Support/Link/Links";
import { SimpleButton } from "../Support/Buttons/Buttons";

function SinUpForm(props) {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [password, setpassword] = useState();
  const [responseFromServer, setResponseFromServer] = useState("");

  const handelCreaAccount = async (event) => {
    const data = {
      userFirstName: firstName,
      userLastName: lastName,
      userEmail: email,
      userMobile: mobile,
      userPassword: password,
    };
    const response = await fetch(
      "http://localhost:3000/accountsService/createAccount",
      {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      }
    );
    const resp = await response.json();
    console.log(resp);
    setResponseFromServer(resp.responseMessage);
  };
  return (
    <div>
      {/* Title */}
      <div style={{ padding: "1rem" }}>
        <Headings text={"Sin up"} fontSize={30} fontWeight={"bold"} />
      </div>
      <Divider />
      <Grid container style={{ padding: "1rem" }}>
        <Grid item xs={6} style={{ padding: "1rem" }}>
          <SimpleTextField
            value={firstName}
            setValue={setFirstName}
            label="First Name"
          />
        </Grid>
        <Grid item xs={6} style={{ padding: "1rem" }}>
          <SimpleTextField
            value={lastName}
            setValue={setLastName}
            label="Last Name"
          />
        </Grid>
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
            value={mobile}
            setValue={setMobile}
            label="Mobile"
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
            name="Creat Account"
            handelClick={(e) => {
              handelCreaAccount(e);
            }}
          />
        </Grid>
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <SimpleLinks
            name={"Have account.. Login"}
            handelClick={() => {
              props.setDoHaveAccount(!props.doHaveAccount);
            }}
          />
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={4} style={{ textAlign: "center", marginTop: "5%" }}>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => {
              alert("Working");
            }}
          >
            <img src="https://img.icons8.com/color/48/undefined/google-logo.png" />
          </div>
        </Grid>

        <Grid item xs={4} style={{ textAlign: "center", marginTop: "5%" }}>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => {
              alert("Working");
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

export default SinUpForm;

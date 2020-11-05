import React from "react";
import NavBar from "./navbar";
import "../App.css";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";


const useStyles = makeStyles({
  root: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "green",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "green",
    },
  },
});

function SignUp() {
  const classes = useStyles();
  return (
    <>
      <NavBar />
      <div className="loginbody">
        <Container component="main">
          <div className="loginpannel">
            <h2 style={{ color: "white" }}>Create An Account</h2>
            <div>
              <p style={{ color: "white" }}>
                {" "}
                Already an User?
                <NavLink exact to="/login">
                  <span style={{ color: "#34ffc8" }}>
                    {" "}
                    Sign In
                  </span>{" "}
                </NavLink>
              </p>
            </div>
            <form noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    className={classes.root}
                    inputProps={{ style: { color: "white" } }}
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    InputLabelProps={{ style: { color: "white" } }}
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    className={classes.root}
                    inputProps={{ style: { color: "white" } }}
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    InputLabelProps={{ style: { color: "white" } }}
                    name="lastName"
                    autoComplete="lname"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    className={classes.root}
                    inputProps={{ style: { color: "white" } }}
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    InputLabelProps={{ style: { color: "white" } }}
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    className={classes.root}
                    inputProps={{ style: { color: "white" } }}
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    InputLabelProps={{ style: { color: "white" } }}
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                </Grid>
              </Grid>
              <br />
              <NavLink exact to="/effects">
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  style={{ backgroundColor: "#34ffc8" }}
                >
                  Sign Up
                </Button>
              </NavLink>
            </form>
          </div>
        </Container>
      </div>
    </>
  );
}

export default SignUp;

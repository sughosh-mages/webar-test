import React from "react";
import NavBar from "./navbar";
import "../App.css";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Typography } from "@material-ui/core";
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

function SignIn() {
  const classes = useStyles();
  return (
    <>
      <NavBar />

      <div className="loginbody">
        <Container component="main">
          <div className="loginpannel">
            <h2 style={{ color: "white" }}>Sign In</h2>
            <p style={{ color: "white" }}>
              {" "}
              New User?{" "}
              <NavLink exact to="/signup" style={{ textDecoration: 'none'}}>
                <span style={{ color: "#34ffc8"  }}> Create an Account</span>{" "}
              </NavLink>
            </p>

            <form noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    className={classes.root}
                    inputProps={{ style: { color: "white" } }}
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Username or Email Address"
                    InputLabelProps={{ style: { color: "white" } }}
                    name="email"
                    autoComplete="email"
                    color="primary"
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
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        value="allowExtraEmails"
                        style={{ color: "#34ffc8" }}
                      />
                    }
                    label={
                      <Typography style={{ color: "#ffffff" }}>
                        Keep me Signed in
                      </Typography>
                    }
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
                  Sign In
                </Button>
              </NavLink>
            </form>
          </div>
        </Container>
      </div>
    </>
  );
}

export default SignIn;
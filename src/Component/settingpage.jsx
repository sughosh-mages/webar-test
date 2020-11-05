import React from "react";
import SidePanel from "./sidepanel";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Avatar from '@material-ui/core/Avatar';
import DP from '../Assets/Image/dp.jfif';


const useStyles = makeStyles((theme) => ({
    large: {
      width: theme.spacing(22),
      height: theme.spacing(22),
    },
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
  }));



function SettingPage() {
    const classes = useStyles();
    return (
    <div className="effeectpagebg">
      <SidePanel />
        <Grid container>
        <Container component="main">
            <h1 style={{ color: "white", fontSize:"350%"}}>Settings</h1>
            <Avatar alt="Sughosh Panday" src={DP} className={classes.large}/><br/>
            <Grid item xs={12} sm={6}>
                <form>
                <Button
                  type="submit"
                  variant="contained"
                  style={{ backgroundColor: "#fff" }}
                >
                  Update Profile Picture
                </Button>
                <br/><br/><br/>
                </form>
            </Grid>
            <form noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    className={classes.root}
                    inputProps={{ style: { color: "white" } }}
                    variant="outlined"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    InputLabelProps={{ style: { color: "white" } }}
                    name="username"
                    autoComplete="username"
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
                    id="email"
                    label="Email"
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
                    label="New-Password"
                    InputLabelProps={{ style: { color: "white" } }}
                    type="password"
                    id="password"
                    autoComplete="new-password"
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
                    label="Confirm-Password"
                    InputLabelProps={{ style: { color: "white" } }}
                    type="password"
                    id="password"
                    autoComplete="confirm-password"
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
                    label="Current-Password"
                    InputLabelProps={{ style: { color: "white" } }}
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                </Grid>
                
              </Grid>
              <br />            
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  style={{ backgroundColor: "#34ffc8" }}
                >
                  Save
                </Button>
                <br/><br/>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  style={{ backgroundColor: "#fff" }}
                >
                  Cancel
                </Button>

            </form>
        </Container>
        </Grid>
    </div>
  );
}

export default SettingPage;

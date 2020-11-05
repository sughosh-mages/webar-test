import React from "react";
import "../App.css";
import Avatar from "@material-ui/core/Avatar";
import DP from "../Assets/Image/dp.jfif";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import SidePanelEffects from "./sidepaneleffects";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MercedesBenz from "../Assets/Image/ImageVideoModelTool/mercedesbenz.jpg";
import MercedesBenz2 from "../Assets/Image/ImageVideoModelTool/mercedesbenz2.jpg";
import MercedesBenz3 from "../Assets/Image/ImageVideoModelTool/mercedesbenz3.png";
import Grid from "@material-ui/core/Grid";
import MercedesLogo from "../Assets/Image/ImageVideoModelTool/MercedesLogo.png";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  profilepicicon: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  root: {
    width: "100%",
    maxWidth: 360,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

function ImageVideoModelToolPage() {
  const classes = useStyles();

  return (
    <div className="effeectpagebg">
      <SidePanelEffects />
      <div>
        <div style={{ padding: "100px 280px" }}>
          <Grid container>
            <Grid>
              <button
                style={{ padding: "5px", background: "none", border: "none" }}
              >
                <img
                  className="categorybutton"
                  src={MercedesBenz}
                  alt="MercedesBenz"
                  width="110px"
                />
              </button>
            </Grid>
            <Grid>
              <button
                style={{ padding: "5px", background: "none", border: "none" }}
              >
                <img
                  className="categorybutton"
                  src={MercedesBenz2}
                  alt="MercedesBenz2"
                  width="110px"
                />
              </button>
            </Grid>
            <Grid>
              <button
                style={{ padding: "5px", background: "none", border: "none" }}
              >
                <img
                  className="categorybutton3"
                  src={MercedesBenz3}
                  alt="MercedesBenz3"
                  width="120px"
                />
              </button>
            </Grid>
          </Grid>
        </div>

        <div
          style={{
            padding: "0% 2%",
            width: "600px",
            height: "300px",
            margin: "0 180px",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "40px",
              margin: "0px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                padding: "0px",
                margin: "0px",
              }}
            >
              <Avatar
                alt="Profile Pic Icon"
                src={DP}
                className={classes.large}
                style={{ padding: "70px 30px" }}
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <img
                  src={MercedesLogo}
                  alt="MercedesLogo"
                  style={{ width: "90px", padding: "0px 70px" }}
                />
                <h1 style={{ padding: "0px 30px" }}>Mercedes Dealer</h1>
                <h2 style={{ padding: "0px 30px", margin: "5px" }}>
                  Sughosh Panday
                </h2>
                <h2 style={{ padding: "0px 30px", margin: "5px" }}>
                  abc@gmail.com
                </h2>
                <h2 style={{ padding: "0px 30px", margin: "5px" }}>
                  9999999999
                </h2>
              </div>
            </div>
          </div>
          <NavLink exact to="/ArPreview">
            <button className="btn-2" style={{ margin: "20px 250px" }}>
              Preview
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default ImageVideoModelToolPage;

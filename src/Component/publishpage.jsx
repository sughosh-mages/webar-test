import React from "react";
import "../App.css";
import Avatar from "@material-ui/core/Avatar";
import SidePanelEffects from './sidepaneleffects';
import DP from "../Assets/Image/dp.jfif";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
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

function PublishPage() {
  const classes = useStyles();

  return (
    <div className="effeectpagebg">
      <SidePanelEffects />
      <div>
        <div style={{ padding: "90px 200px", paddingBottom: "0px" }}>
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
        <div style={{ display: "Flex", flexDirection: "row" }}>
          <div
            style={{
              padding: "0% 2%",
              width: "600px",
              height: "300px",
              margin: "0 100px",
              marginRight: "0px",
            }}
          >
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "40px",
                margin: "80px 0px",
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
          </div>
          <div
            style={{
              backgroundColor: "#272727",
              borderRadius: "40px",
              margin: "0px",
              padding: "0px 5px",
              height: "350px",
              width: "310px",
            }}
          >
            <h1 style={{ color: "wheat", padding: "5px 20px" }}>Pannel</h1>
            <div style={{ display: "Flex", flexDirection: "column" }}>
              <button
                className="btn-1"
                style={{ margin: "7px", fontSize: "15px" }}
              >
                QR Code
              </button>
              <button
                className="btn-1"
                style={{ margin: "7px", fontSize: "15px" }}
              >
                URL
              </button>
              <button
                className="btn-1"
                style={{ margin: "7px", fontSize: "15px" }}
              >
                Custom Domain
              </button>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            margin: "20px 400px",
          }}
        >
          <NavLink exact to="/ArPreview">
            <button className="btn-1" style={{ padding: "15px 48px" }}>
              Back
            </button>
          </NavLink>
          <NavLink exact to="/publish">
            <button className="btn-2">Publish</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default PublishPage;

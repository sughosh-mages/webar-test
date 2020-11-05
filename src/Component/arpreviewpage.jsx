import React from "react";
import "../App.css";
import Avatar from "@material-ui/core/Avatar";
import SidePanelEffects from './sidepaneleffects';
import DP from "../Assets/Image/dp.jfif";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
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

      <div style={{ padding: "8% 0%", margin: "0 180px" }}>
        {/* <div
          style={{ backgroundColor: "white", height: "450px", width: "500px" }}
        /> */}
        <iframe src="https://8e31c5df6b2b.ngrok.io/AR" height="80%" width="100%" allowFullScreen="yes" allowvr="yes"/>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            margin: "50px 200px",
          }}
        >
          <NavLink exact to="/ImageVideoModelTool">
            <button className="btn-1" style={{ padding: "15px 48px" }}>
              Edit{" "}
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

export default ImageVideoModelToolPage;

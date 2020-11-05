import React from "react";
import Avatar from "@material-ui/core/Avatar";
import DP from "../Assets/Image/dp.jfif";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  large: {
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

function SidePanelEffects() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div
      className="sidepanel"
      style={{ display: "flex", flexDirection: "row" }}
    >
      <div>
        <div>
          <Avatar alt="Sughosh Panday" src={DP} className={classes.large} />
          <h2 style={{ color: "white", padding: "0 px" }}>Sughosh Pandey</h2>
        </div>
        <div>
          <h2 style={{ color: "white" }}>Commerce</h2>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.root}
          >
            <NavLink exact to="/effects">
              <ListItem button style={{ color: "wheat" }}>
                <ListItemText primary="Account" />
              </ListItem>
            </NavLink>
            <NavLink exact to="/ImageVideoModelTool">
              <ListItem button style={{ color: "wheat" }}>
                <ListItemText primary="Tool" />
              </ListItem>
            </NavLink>
            <ListItem button style={{ color: "wheat" }}>
              <ListItemText primary="Gallery" />
            </ListItem>
            <ListItem button style={{ color: "wheat" }}>
              <ListItemText primary="Upload" />
            </ListItem>
          </List>
        </div>
      </div>
      <div
        style={{
          border: "solid",
          borderColor: "#6a6a6b",
          marginRight: "0px",
          marginLeft: "50px",
        }}
      />
    </div>
  );
}

export default SidePanelEffects;

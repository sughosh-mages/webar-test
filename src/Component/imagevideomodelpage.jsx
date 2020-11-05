import React from 'react'
import "../App.css";
import Avatar from '@material-ui/core/Avatar';
import SidePanelEffects from './sidepaneleffects';
import DP from '../Assets/Image/dp.jfif';
import { makeStyles } from '@material-ui/core/styles';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import GalleryLogo from "../Assets/Image/ImageVideoModel/Gallery.jpg";
import VideoPlayerLogo from "../Assets/Image/ImageVideoModel/VideoPlayer.jpg";
import BoxLogo from "../Assets/Image/ImageVideoModel/3DBox.jpg";
import Grid from '@material-ui/core/Grid';
import ProfilePicIcon from '../Assets/Image/profilepngicon.jpg';
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    large: {
      width: theme.spacing(20),
      height: theme.spacing(20),
    },
    root: {
        width: '100%',
        maxWidth: 360,

      },
      nested: {
        paddingLeft: theme.spacing(4),
      },
  }));

function ImageVideoModelPage() {
    const classes = useStyles();

    return (
        <div className="effeectpagebg">
            <SidePanelEffects/>
            <div>
                <div style={{padding: "100px 280px"}}>
                    <Grid container>
                            <Grid>
                            <button style={{padding: "5px", background:"none", border:"none"}}><img className="categorybutton" src={GalleryLogo} alt="GalleryLogo" width="110px" /></button>
                            </Grid>
                            <Grid>
                            <button style={{padding: "5px", background:"none", border:"none"}}><img className="categorybutton" src={VideoPlayerLogo} alt="VideoPlayerLogo" width="110px" /></button>
                            </Grid>
                            <Grid>
                            <button style={{padding: "5px", background:"none", border:"none"}}><img className="categorybutton" src={BoxLogo} alt="BoxLogo" width="110px" /></button>
                            </Grid>
                    </Grid>
                </div>
                
                <div style={{backgroundColor: "white",padding:"3% 2%", width: "600px", height: "300px", borderRadius: "40px", margin:"0 180px"}}>
                    <div style={{display: "flex", flexDirection: "row", padding:"0px", margin: "0px"}}>
                        <Avatar alt="Profile Pic Icon" src={ProfilePicIcon} className={classes.large} style={{padding:"70px 30px"}}/>
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <h1 style={{padding: "0px 30px"}}>Company Name</h1>
                            <h2 style={{padding: "0px 30px", margin:"5px"}}>Full Name</h2>
                            <h2 style={{padding: "0px 30px", margin:"5px"}}>E-Mail</h2>
                            <h2 style={{padding: "0px 30px", margin:"5px"}}>Phone</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageVideoModelPage

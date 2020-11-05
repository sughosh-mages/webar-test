import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import DP from '../Assets/Image/dp.jfif';
import Button from "@material-ui/core/Button";
import { Typography } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
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
        width: '100%',
        maxWidth: 360,

      },
      nested: {
        paddingLeft: theme.spacing(4),
      },
  }));

function SidePanel() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
    setOpen(!open);
  };
    return (
      <div style={{padding:"7%", display:"flex", flexDirection:"row" }}>
        <div className="sidepanel"> 
          <div>
            <div >
                <Avatar alt="Sughosh Panday" src={DP} className={classes.large}/>
                <h2 style={{ color: 'white', padding:"0 35px" }}>Sughosh Pandey</h2>
            </div>
            <div>
              <List component="nav" aria-labelledby="nested-list-subheader" className={classes.root}>
                <NavLink exact to="/effects">                  
                  <ListItem button>
                    <ListItemText primary="Account" style={{color: 'wheat'}}/>
                  </ListItem>
                </NavLink>
                <NavLink exact to="/myEffects">
                  <ListItem button>
                    <ListItemText primary="My Effects" style={{color: 'wheat'}}/>
                  </ListItem>
                </NavLink>                
                <NavLink exact to="/chooseCatergory">                
                  <ListItem button>
                    <ListItemText primary="New" style={{color: 'wheat'}}/>
                  </ListItem>
                </NavLink>
                  <ListItem button onClick={handleClick}>
                    <ListItemText primary="Categories" style={{color: 'wheat'}}/>
                  </ListItem>
                
                <Collapse in={!open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                      <ListItemText primary="Education" style={{color: 'wheat'}}/>
                    </ListItem>
                    <ListItem button className={classes.nested}>
                      <ListItemText primary="Financial" style={{color: 'wheat'}}/>
                    </ListItem>
                    <ListItem button className={classes.nested}>
                      <ListItemText primary="Tourism" style={{color: 'wheat'}}/>
                    </ListItem>
                    <ListItem button className={classes.nested}>
                      <ListItemText primary="Commerce" style={{color: 'wheat'}}/>
                    </ListItem>
                    <ListItem button className={classes.nested}>
                      <ListItemText primary="Transport" style={{color: 'wheat'}}/>
                    </ListItem>
                    <ListItem button className={classes.nested}>
                      <ListItemText primary="Utilities" style={{color: 'wheat'}}/>
                    </ListItem> 
                  </List>
                </Collapse>
              </List>
            </div>
            <div style={{paddingTop:"100px"}}>
              <Grid  container>
                  <Grid >
                  <Button><Typography style={{ color: '#ffffff' }}>Settings</Typography></Button><br/>
                  </Grid>
                  <Grid item >
                  <SettingsIcon style={{ color:  'ffffff'}}/>
                  </Grid>
              </Grid>
            </div>
          </div>  
        </div>
        <div style={{border:"solid", borderColor:"#6a6a6b",  marginRight:"0px",marginLeft:"50px",}}/>
      </div>
    )
}

export default SidePanel

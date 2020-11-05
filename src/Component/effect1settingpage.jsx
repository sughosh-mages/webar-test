import React from 'react'
import SidePanel from './sidepanel';
import "../App.css";
import AnalyticsIcon from "../Assets/Image/Icons/AnalyticsIcon.png";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';
import { lightGreen } from '@material-ui/core/colors';
import Switch from '@material-ui/core/Switch';
import { NavLink } from "react-router-dom";

const GreenSwitch = withStyles({
    switchBase: {
      color: lightGreen[0],
      '&$checked': {
        color: lightGreen['A400'],
      },
      '&$checked + $track': {
        backgroundColor: lightGreen['A400'],
      },
    },
    checked: {},
    track: {},
  })(Switch);

function Effect1SettingPage() {
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedC: true,
      });
    
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };
    return (
        <div className="effeectpagebg">
            <SidePanel/>
            <div style={{marginLeft:"120px"}}> 
                <div style={{display:"flex", flexDirection:"row"}}>
                    <h1 style={{ color: '#ffffff', padding:"100px", fontSize:"45px", padding:"0px", paddingTop:"100px"}}>Effect 1</h1>
                    <NavLink exact to="/effect1Analytics">                        
                      <button style={{background:"none", border:"none", marginh: "0px", padding:"0px", paddingLeft: "500px",paddingTop:"100px"}}><img src={AnalyticsIcon} alt="AnalyticsIcon" width="45px" height="45px" /></button>
                    </NavLink>
                    <FormGroup style={{paddingTop:"140px", paddingLeft: "20px"}}>
                        <FormControlLabel
                            control={<GreenSwitch checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                        />
                    </FormGroup>
                </div>
                <div className="effectborder" style={{height:"350px", borderWidth:"2px" }}>
                   <div style={{height:"190px", width:"300px", borderRadius: "20px",backgroundColor:"white", margin:" 70px 50px"}}/>
                   <div style={{height:"190px", width:"300px", borderRadius: "20px",backgroundColor:"white", margin:" 70px 50px"}}/>
                </div>
                <div style={{display:"flex", flexDirection:"row", margin:"10px 560px"}}>
                  <NavLink exact to="/myEffects">                  
                    <button className="btn-1" >Back</button>
                  </NavLink>
                    <button className="btn-2">Apply</button>
                </div>
            </div>
        </div>
    )
}

export default Effect1SettingPage

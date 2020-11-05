import React from 'react'
import SidePanel from './sidepanel';
import "../App.css";
import SettingsIcon from "../Assets/Image/Icons/SettingsIcon.png";
import AnalyticsIcon from "../Assets/Image/Icons/AnalyticsIcon.png";
import { NavLink } from "react-router-dom";

function MyEffectPage() {
    return (
        <div className="effeectpagebg">
            <SidePanel/>
            <div>
                <h1 style={{ color: '#ffffff', padding:"100px", fontSize:"45px", paddingBottom:"0px", paddingLeft:"0px"}}>My Effect</h1>
                <div className="effectborder">
                    <h1 style ={{color: "white", padding: "0px 30px", margin:"25px 0px"}}>Effect 1</h1>
                    <div className="effecticons">
                        <NavLink exact to="/effect1Setting">                        
                            <button style={{background:"none", border:"none"}}><img src={SettingsIcon} alt="SettingsIcon" width="50px" height="50px" /></button>
                        </NavLink>
                        <NavLink exact to="/effect1Analytics">                        
                            <button style={{background:"none", border:"none", marginLeft:"20px"}}><img src={AnalyticsIcon} alt="AnalyticsIcon" width="50px" height="50px" /></button>
                        </NavLink>
                    </div>
                </div>
                <div className="effectborder" style={{margin:"30px 0px"}}>
                    <h1 style ={{color: "white", padding: "0px 30px", margin:"25px 0px"}}>Effect 2</h1>
                    <div className="effecticons">
                        <NavLink exact to="/effect1Setting">                        
                            <button style={{background:"none", border:"none"}}><img src={SettingsIcon} alt="SettingsIcon" width="50px" height="50px" /></button>
                        </NavLink>
                        <NavLink exact to="/effect1Analytics">                        
                            <button style={{background:"none", border:"none", marginLeft:"20px"}}><img src={AnalyticsIcon} alt="AnalyticsIcon" width="50px" height="50px" /></button>
                        </NavLink>
                    </div>
                </div>
                <div className="effectborder">
                    <h1 style ={{color: "white", padding: "0px 30px", margin:"25px 0px"}}>Effect 3</h1>
                    <div className="effecticons">
                        <NavLink exact to="/effect1Setting">                        
                            <button style={{background:"none", border:"none"}}><img src={SettingsIcon} alt="SettingsIcon" width="50px" height="50px" /></button>
                        </NavLink>
                        <NavLink exact to="/effect1Analytics">                        
                            <button style={{background:"none", border:"none", marginLeft:"20px"}}><img src={AnalyticsIcon} alt="AnalyticsIcon" width="50px" height="50px" /></button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyEffectPage

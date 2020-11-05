import React from 'react'
import SidePanel from './sidepanel';
import "../App.css";
import Analytics from "../Assets/Image//Analytics.png";
import { NavLink } from "react-router-dom";

function Effect1AnalyticsPage() {
    return (
        <div className="effeectpagebg">
            <SidePanel/>
            <div style={{marginLeft:"120px"}}>
                <div style={{display:"flex", flexDirection:"row"}}>
                    <h1 style={{ color: '#ffffff', padding:"100px", fontSize:"45px", padding:"0px", paddingTop:"100px"}}>Effect 1 <br/> Analytics</h1>
                    <div style={{ padding:"100px", fontSize:"45px", padding:"0px", paddingTop:"140px", paddingLeft: "500px"}}>
                        <button className="btn-2" style={{borderRadius:"10px"}}>Timespan</button>
                    </div>
                </div>
                <div style={{height:"350px", borderWidth:"2px" }}>
                   <div style={{height:"190px", width:"300px", borderRadius: "20px", margin: "0px 50px"}}>
                       <img src={Analytics} alt="Analytics" width="800px"/>
                    </div>
                </div>
                <div style={{display:"flex", flexDirection:"row", margin:"50px 600px"}}>
                    <NavLink exact to="/myEffects">                  
                        <button className="btn-1" >Back</button>
                    </NavLink>
                    <NavLink exact to="/effect1AnalyticsExport">                  
                        <button className="btn-2">Export</button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Effect1AnalyticsPage

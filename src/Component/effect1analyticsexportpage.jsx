import React from 'react'
import SidePanel from './sidepanel';
import "../App.css";
import Analytics from "../Assets/Image//Analytics.png";

function Effect1AnalyticsExportPage() {
    
    return (
        <div className="effeectpagebg">
            <SidePanel/>
            <div style={{marginLeft:"120px"}}>
                <div style={{display:"flex", flexDirection:"row"}}>
                    <h1 style={{ color: '#ffffff', padding:"100px", fontSize:"45px", paddingTop:"100px"}}>Effect 1 <br/> Analytics</h1>
                </div>
                <div style={{height:"350px",display:"flex", flexDirection:"row"}}>
                   <div style={{height:"190px", width:"280px", borderRadius: "20px", margin: "0px 50px"}}>
                       <img src={Analytics} alt="Analytics" width="500px"/>
                    </div>
                    <div style={{backgroundColor: "#272727", borderRadius: "40px", margin:"0px 250px", padding: "0px 5px",height: "320px", width:"310px"}}>
                        <h1 style={{color: "wheat", padding:"5px 20px"}}>Upload as</h1>
                        <div style={{ display:"Flex", flexDirection:"column"}}>
                            <button className="btn-1" style={{margin:"7px", fontSize:"15px"}}>QR Code</button>
                            <button className="btn-1" style={{margin:"7px", fontSize:"15px"}}>URL</button>
                            <button className="btn-1" style={{margin:"7px", fontSize:"15px"}}>Custom Domain</button>
                        </div>
                    </div>
                </div>
                <div style={{display:"flex", flexDirection:"row", margin:"60px 670px"}}>
                        <button className="btn-1" >Back</button>
                        <button className="btn-2">Export</button>
                </div>
            </div>
        </div>
    )
}

export default Effect1AnalyticsExportPage

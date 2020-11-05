import React from 'react'
import BG from '../Assets/Image/reality_img.png';
import "../App.css";
import NavBar from './navbar';

function MainContent() {
    return (
        <React.Fragment>
        <NavBar/>
        <div className="main">
            <div className="bgimage">
                <center>
                <img src={BG} alt=""/>
                </center>
            </div>
        </div>
        </React.Fragment>
    )
}

export default MainContent

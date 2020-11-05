import React from 'react'
import SidePanel from './sidepanel';
import ProductDisplay from '../Assets/Image/CommerceTemplate/ProductDisplay.jpg';
import BuisnessCard from '../Assets/Image/CommerceTemplate/BuisnessCard.jpg';
import EducationFlashCard from '../Assets/Image/CommerceTemplate/EducationFlashCard.jpg';
import Poster from '../Assets/Image/CommerceTemplate/Poster.jpg';
import Brochure from '../Assets/Image/CommerceTemplate/Brochure.jpg';
import Catalog from '../Assets/Image/CommerceTemplate/Catalog.jpg';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import "../App.css";
import { NavLink } from "react-router-dom";


function CommerceTemplatePage() {
    return (
        <div className="effeectpagebg">
            <SidePanel/>
            <div style={{marginLeft:"120px"}}>
                <div style={{margin:" 0px 500px", marginTop: "150px", marginLeft:"230px"}}>
                    <h1 style={{ color: '#ffffff'}}>Choose Category</h1>
                </div>
                <div style={{display:"flex", flexDirection:"column"}}>
                    <Grid container>
                    <div style={{display:"flex", flexDirection:"row"}}>
                        <Grid>
                            <NavLink exact to="/ImageVideoModel">                            
                                <button style={{background:"none", border:"none"}}><img className="categorybutton" src={ProductDisplay} alt="Image Video Model" width="200px" /></button>
                            </NavLink>
                            <br/>
                                <Grid container spacing={4} style={{ paddingLeft:"45px"}}>
                                    <Grid item>
                                        <Typography style={{ color: '#ffffff', padding: '2% 0%' }}>Product Display</Typography>
                                    </Grid>
                                    <Grid item style={{paddingLeft:'0'}}  >
                                    <div class="tooltip"><InfoIcon fontSize="small" style={{ color:  'ffffff'}}/>
                                        <span class="tooltiptext"><span style={{textDecoration: "underline", fontWeight:"bold"}}>Image Recognition<br/></span><br/>Material Change<br/>Animation <br/>3D Model</span>
                                    </div>
                                        
                                    </Grid>
                                </Grid>
                        </Grid>
                        
                        <Grid>
                            <NavLink exact to="/ImageVideoModel">                                                        
                                <button style={{background:"none", border:"none"}}><img className="categorybutton" src={BuisnessCard} alt="Image Model" width="200px" /></button>
                            </NavLink>
                            <br/>
                            <Grid container spacing={4} style={{ paddingLeft:"45px"}}>
                                    <Grid item>
                                        <Typography style={{ color: '#ffffff', padding: '2% 0%' }}>Buisness Card</Typography>
                                    </Grid>
                                    <Grid item style={{paddingLeft:'0'}}  >
                                    <div class="tooltip"><InfoIcon fontSize="small" style={{ color:  'ffffff'}}/>
                                        <span class="tooltiptext"><span style={{textDecoration: "underline", fontWeight:"bold"}}>Pattern Recognition<br/></span><br/>Image<br/>Video <br/>Sound</span>
                                    </div>
                                        
                                    </Grid>
                                </Grid>
                        </Grid>
                    <Grid>
                        <NavLink exact to="/ImageVideoModel">                            
                            <button style={{background:"none", border:"none"}}><img className="categorybutton" src={EducationFlashCard} alt="Location Video" width="200px" /></button>
                        </NavLink>
                        <br/>
                        <Grid container spacing={4} style={{ paddingLeft:"45px"}}>
                                    <Grid item>
                                        <Typography style={{ color: '#ffffff', padding: '2% 0%' }}>Education Flash Card</Typography>
                                    </Grid>
                                    <Grid item style={{paddingLeft:'0'}}  >
                                    <div class="tooltip"><InfoIcon fontSize="small" style={{ color:  'ffffff'}}/>
                                        <span class="tooltiptext"><span style={{textDecoration: "underline", fontWeight:"bold"}}>Image Recognition<br/></span><br/>Animation <br/>3D Model</span>
                                    </div>
                                        
                                    </Grid>
                                </Grid>
                    </Grid>
                    </div>
                    <div style={{display:"flex", flexDirection:"row", paddingTop:"50px"}}>
                        <Grid>
                        <NavLink exact to="/ImageVideoModel">
                            <button style={{background:"none", border:"none"}}><img className="categorybutton" src={Poster} alt="Video Model Images" width="200px" /></button>
                        </NavLink>
                        <br/>
                        <Grid container spacing={4} style={{ paddingLeft:"45px"}}>
                                    <Grid item>
                                        <Typography style={{ color: '#ffffff', padding: '2% 0%' }}>Product Display</Typography>
                                    </Grid>
                                    <Grid item style={{paddingLeft:'0'}}  >
                                    <div class="tooltip"><InfoIcon fontSize="small" style={{ color:  'ffffff'}}/>
                                        <span class="tooltiptext"><span style={{textDecoration: "underline", fontWeight:"bold"}}>Image Recognition<br/></span><br/>Material Change<br/>Animation <br/>3D Model</span>
                                    </div>
                                        
                                    </Grid>
                                </Grid>
                        </Grid>
                        <Grid>
                        <NavLink exact to="/ImageVideoModel">                        
                            <button style={{background:"none", border:"none"}}><img className="categorybutton" src={Brochure} alt="Etc" width="200px" /></button>
                        </NavLink>
                        <br/>
                        <Grid container spacing={4} style={{ paddingLeft:"45px"}}>
                                    <Grid item>
                                        <Typography style={{ color: '#ffffff', padding: '2% 0%' }}>Brochure</Typography>
                                    </Grid>
                                    <Grid item style={{paddingLeft:'0'}}  >
                                    <div class="tooltip"><InfoIcon fontSize="small" style={{ color:  'ffffff'}}/>
                                        <span class="tooltiptext"><span style={{textDecoration: "underline", fontWeight:"bold"}}>Image Recognition<br/></span><br/>Animation <br/>3D Model<br/>Video</span>
                                    </div>
                                        
                                    </Grid>
                                </Grid>
                        </Grid>
                        <Grid>
                        <NavLink exact to="/ImageVideoModel">                        
                            <button style={{background:"none", border:"none"}}><img className="categorybutton" src={Catalog} alt="Etc" width="200px" /></button>        
                        </NavLink>
                        <br/>
                        <Grid container spacing={4} style={{ paddingLeft:"45px"}}>
                                    <Grid item>
                                        <Typography style={{ color: '#ffffff', padding: '2% 0%' }}>Catalog</Typography>
                                    </Grid>
                                    <Grid item style={{paddingLeft:'0'}}  >
                                    <div class="tooltip"><InfoIcon fontSize="small" style={{ color:  'ffffff'}}/>
                                        <span class="tooltiptext"><span style={{textDecoration: "underline", fontWeight:"bold"}}>Pattern Recognition<br/></span><br/>Image<br/>Video <br/>Sound</span>
                                    </div>
                                        
                                    </Grid>
                                </Grid>
                        
                        </Grid>
                    </div>
                    </Grid>
                </div>
            </div>
            
        </div>
    )
}

export default CommerceTemplatePage

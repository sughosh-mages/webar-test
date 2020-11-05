import React from 'react'
import SidePanel from './sidepanel';
import Education from '../Assets/Image/Categories/Education.jpg';
import Financial from '../Assets/Image/Categories/Financial.jpg';
import Tourism from '../Assets/Image/Categories/Tourism.jpg';
import Commerce from '../Assets/Image/Categories/Commerce.jpg';
import Transport from '../Assets/Image/Categories/Transport.jpg';
import Utilities from '../Assets/Image/Categories/Utilities.png';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

function ChooseCategoryPage() {
    return (
        <div className="effeectpagebg">
            <SidePanel/>
            <div style={{marginLeft:"120px"}}>
                <div style={{margin:" 0px 500px", marginTop: "150px", marginLeft:"185px"}}>
                    <h1 style={{ color: '#ffffff', fontSize:"40px"}}>Choose Category</h1>
                </div>
                <div style={{display:"flex", flexDirection:"column"}}>
                    <Grid container>
                        <div style={{display:"flex", flexDirection:"row"}}>
                            <Grid>
                            <NavLink exact to="/commerceTemplate">
                                <button style={{background:"none", border:"none"}}><img className="categorybutton" src={Education} alt="Education" width="200px" /></button>
                            </NavLink>
                            <br/><Typography style={{ color: '#ffffff', padding: '2% 35%' }}>Education</Typography><br/>
                            </Grid>
                            
                            <Grid>
                            <NavLink exact to="/commerceTemplate">
                                <button style={{background:"none", border:"none"}}><img className="categorybutton" src={Financial} alt="Financial" width="200px" /></button>
                            </NavLink>
                            <br/><Typography style={{ color: '#ffffff', padding: '2% 35%' }}>Financial</Typography><br/>
                            </Grid>
                            <Grid>
                            <NavLink exact to="/commerceTemplate">
                                <button style={{background:"none", border:"none"}}><img className="categorybutton" src={Tourism} alt="Tourism" width="200px" /></button>
                            </NavLink>
                            <br/><Typography style={{ color: '#ffffff', padding: '2% 35%' }}>Tourism</Typography><br/>
                            </Grid>
                        </div>
                        
                        <div style={{display:"flex", flexDirection:"row"}}>
                            <Grid>
                            <NavLink exact to="/commerceTemplate">
                            <button style={{background:"none", border:"none"}}><img className="categorybutton" src={Commerce} alt="Commerce" width="200px" /></button>
                            </NavLink>
                            <br/><Typography style={{ color: '#ffffff', padding: '2% 35%' }}>Commerce</Typography><br/>
                            </Grid>
                            <Grid>
                            <NavLink exact to="/commerceTemplate">
                                <button style={{background:"none", border:"none"}}><img className="categorybutton" src={Transport} alt="Transport" width="200px" /></button>
                            </NavLink>
                            <br/><Typography style={{ color: '#ffffff', padding: '2% 35%' }}>Transport</Typography><br/>
                            </Grid>
                            <Grid>
                            <NavLink exact to="/commerceTemplate">
                                <button style={{background:"none", border:"none"}}><img className="categorybutton" src={Utilities} alt="Utilities" width="200px" /></button>        
                            </NavLink>
                            <br/><Typography style={{ color: '#ffffff', padding: '2% 35%' }}>Utilities</Typography><br/>
                            </Grid>
                        </div>
                        
                    </Grid>
                </div>
            </div>
            
        </div>
    )
}

export default ChooseCategoryPage

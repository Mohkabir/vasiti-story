import React from 'react';
import { Grid } from "@material-ui/core";
import ladiesImg from "../asset/black-beautiful-ladies-smiling 1.svg";
import Ellipse from "../asset/Ellipse 8.svg";
import blackbg from "../asset/blackbg.svg";

import underlinevector from "../asset/underlinevector.svg";

import { Box } from '@mui/system';
import { Link } from "react-router-dom";

const SectionTwo = ({handleOpen}) => {
  return (
    <div className="sectionTwo">
      <Box className="wrapper" sx={{ pt: 5 }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={6}>
            <div className="heroVector ">
              <img style={{zIndex: "2", position: "sticky"}} src={ladiesImg} alt="heroImg" />
              <img className="blackbg" src={blackbg} alt="blackbg" />
            </div>
          </Grid>
          <Grid item xs={11} md={6} >
            <h2>Tolu & Joy’s Experience</h2>
            <span style={{ border: "1px solid rgba(255, 255, 255, 0.4)"}}>CUSTOMER</span>
            <p>I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back! I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back!</p>
            <div style={{ position : "relative", cursor:"pointer"}} onClick={handleOpen}>
                <h3>Share your own story!</h3>
                <img className="underline" style={{}} src={underlinevector} alt="underlinevector" />
            </div>   
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default SectionTwo

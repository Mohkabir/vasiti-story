import React from 'react';
import { Grid } from "@material-ui/core";
import { Box } from '@mui/system';

import underlinevector from "../asset/underlinevector.svg";
import womanShoppingbag from "../asset/woman-shoppingbag-card 1.svg";

const SectionFour = ({handleOpen}) => {
  return (
    <Box className="sectionFour" sx={{ pt: 5 }}>
      <Box className="wrapper sectionFour">
        <Grid container spacing={3} alignItems="center" justifyContent="space-between">
          <Grid item xs={12} md={5}>
            <h2>Josiah’s Experience</h2>
            <span style={{color: "#FF5C00",border: "1px solid rgba(255, 92, 0, 0.4)",padding: "5px"}}>VENDOR</span>
            <p>I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back! I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back!</p>
            <div style={{ position : "relative", color: "#FF5C00", cursor:"pointer"}} onClick={handleOpen}>
              <h3>Share your own story!</h3>
              <img className="underline" src={underlinevector} alt="underlinevector" />
            </div>        
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="heroVector">
              <img src={womanShoppingbag} alt="woman Shoppingbag" />
            </div>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default SectionFour

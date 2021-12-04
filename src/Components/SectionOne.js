import React from 'react';
import { Grid } from "@material-ui/core";
import heroImg from "../asset/Testimonial image 1.svg";
import heroBg from "../asset/Subtract.svg";
import { Box } from '@mui/system';

const SectionOne = () => {
  return (
  <Box className="wrapper" sx={{ pt: 4 }}>
    <Grid container spacing={3} alignItems="center" justifyContent="space-between">
      <Grid item xs={12} md={5}>
        <h1>Amazing Experiences from Our Wonderful Customers</h1>
        <p>Here is what customers and vendors are saying about us, you can share your stories with us too.</p>
      </Grid>
      <Grid item xs={12} md={6}>
        <div className="heroVector">
          <img src={heroImg} alt="heroImg" />
          <img className="bgVector" src={heroBg} alt="heroBg" />
        </div>
      </Grid>
    </Grid>
  </Box>
  )
}

export default SectionOne

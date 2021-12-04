import React from 'react';
import { Grid } from "@material-ui/core";
import { Box } from '@mui/system';
import { Link } from "react-router-dom";

import subscribeBanner from "../asset/subscribe-banner 1.svg";
import fb from "../asset/fb.svg";
import ig from "../asset/ig.svg";
import tw from "../asset/tw.svg";
import li from "../asset/li.svg";

const Footer = () => {
  return (
    <Box className="footer">
      <Box className="wrapper">
        <Grid container spacing={3} alignItems="center" justifyContent="space-around">
          <Grid item xs={12} md={7} justifyContent="space-around">
            <div className="heroVector">
              <img style={{marginTop: "-50px"}} src={subscribeBanner} alt="subscribe Banner" />
            </div>
          </Grid>
          <Grid item xs={12} md={5}>
            <h2>Be a  member of our community 🎉</h2>
            <p>We’d make sure you’re always first to know what’s happening on Vasiti—thus, the world.</p>
            <div className="subscribe">
            <input  type="text" placeholder="enter your email address" />
            <button>SUBSCRIBE</button>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={3} alignItems="baseline" justifyContent="space-around">   
          <Grid item xs={6} md={4} lg={2} className="section_space">
            <h3>Company</h3>
              <p><Link to="/aboutUs">About us</Link></p>
              <p><Link to="/#">Term of Use</Link></p>
              <p><Link to="/#">Privacy Policy</Link></p>
              <p><Link to="/#">Press & Media</Link></p>
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <h3>Products</h3>
              <p><Link to="/#">Marketplace</Link></p>
              <p><Link to="/#">Magazine</Link></p>
              <p><Link to="/#">Seller</Link></p>
              <p><Link to="/#">Wholesale</Link></p>
              <p><Link to="/#">Services</Link></p>
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <h3>Careers</h3>
              <p><Link to="/#">Become a Campus Rep</Link></p>
              <p><Link to="/#">Become a Vasiti Influencer</Link></p>
              <p> <Link to="/#">Become a Campus writer</Link></p>
              <p><Link to="/#">Become an Affiliate</Link></p>
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <h3>Get in touch</h3>
              <p><Link to="/contactUs">Contact us</Link></p>
              <p><Link to="/#">Partner with us</Link></p>
              <p><Link to="/#">Advertise with us</Link></p>
              <p><Link to="/#">Help/FAQs</Link></p>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <h3>Join our community</h3>
              <Box>
                <img className="mr_10" src={fb} alt="fb" />
                <img className="mr_10" src={ig} alt="fb" />
                <img className="mr_10" src={tw} alt="fb" />
                <img className="mr_10" src={li} alt="fb" />
              </Box>
              <p>Email Newsletter</p>
          </Grid> 
        </Grid>
      </Box>
    </Box>
  )
}

export default Footer

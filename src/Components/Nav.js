import React from 'react';
import { Link } from "react-router-dom";
import { Box } from "@material-ui/core";
import logo from "../asset/Vasiti-Logo-black 1.svg";

const Nav = ({handleOpen}) => {
  return (
  <>  
    <Box className="wrapper"
    display="flex"
    justifyContent="space-between"
    alignItems="baseline"
    sx={{ py: 4 }}
    >
      <div>
        <img src={logo} alt="logo" />
      </div>
      <Box
      style={{ width: "50%"}}
      display={{ xs: 'none', sm: 'flex'}}
      justifyContent="space-around"
      >
        <li>
          <Link to="#">ABOUT US</Link>
        </li>
        <li>
          <Link to="#">STORIES</Link>
        </li>
        <li>
          <Link to="#">CONTACT</Link>
        </li>
        <li onClick={handleOpen}>
          <Link to="#">LOG IN</Link>
        </li>
        <li onClick={handleOpen}>
          <Link className="signup" to="#">
          SIGN UP
          </Link>
        </li>
      </Box>
    </Box>
    <Box display={{ xs: 'none'}} className="shaded_border">
      <Box className="wrapper "
      display={{ xs: 'none', sm: 'flex'}}
      justifyContent="space-between"
      sx={{ py: 2 }}
      >
        <li>
          <Link to="#">MARKETPLACE</Link>
        </li>
        <li>
          <Link to="#">WHOLESALE CENTER</Link>
        </li>
        <li>
          <Link to="#">SELLER CENTER</Link>
        </li>
        <li>
          <Link to="#">SERVICES</Link>
        </li>
        <li>
          <Link to="#">INTERNSHIPS</Link>
        </li>
        <li>
          <Link to="#">EVENTS</Link>
        </li>
      </Box>
    </Box>
  </>
  )
}

export default Nav

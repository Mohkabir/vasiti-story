import React from 'react';
import { Box } from '@mui/system';
import successImg from "../asset/success.svg";
import { Link } from "react-router-dom";


const ShareSuccessfull = () => {
  return (
    <Box className="share" style={{textAlign: "center"}} sx={{ py: 4 }}>
      <img src={successImg} alt="successImg" />
      <h1 style={{textAlign: "center"}}>Thank you for sharing your story!</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <Box  sx={{ py: 3 }}>
        <Link to="/">
          <button className="custom_btn" type="button">Close</button>
        </Link>
      </Box>
    </Box>
  )
}

export default ShareSuccessfull

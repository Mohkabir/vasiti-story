import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FileBase64 from "react-file-base64";

import { Box } from '@mui/system';
import { Grid } from "@material-ui/core";
import attachimg from "../asset/attachimg.svg";
import profile from "../asset/profile.jpg";
import cancel from "../asset/x.svg";
import { createStory } from "../Redux/actions/storyAction";


const ShareStories = () => {

  const dispatch = useDispatch()
  const history = useHistory();  
  const [values, setValues] = React.useState({
    firstName: "",
    lastName: "",
    story: "",
    imgName: "Choose image",
    img:"",
    status: "",
    isImgSelected: false
  });

  const handleChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  const inputRef = useRef();
    
  const handleUploadClick = (event) => {
    inputRef.current.click();
  };

  const handleChangeFile = (key, event) => {
    setValues({
      imgName: event.target.files[0]?.name,
      isImgSelected: true
    })
  }

  const handleimages = (file) => {
    setValues({
      ...values, 
      imgName: file.name,
      isImgSelected: true,
      img: file.base64
    })   
  }

  const cancelImg = () => {
    setValues({
      ...values, 
      imgName: "Choose image",
      isImgSelected: false,
      img: ""
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(values, "values log");
    
    const data = {
      name: `${values.firstName} ${values.lastName}`,
      status: values.status,
      img: profile,
      story: values.story
    }
    dispatch(createStory(data));
    history.push("/shareSuccessfull");
  }

  const handleChangeRadio = (e) => {
    if (e.target.value === "customer"){
        setValues({...values, status: "customer"});  
    }else {
      setValues({...values, status: "vendor"});
    }
  }

  return (
    <Box className="share">
      <h2 style={{textAlign: "center"}}>Share your amazing story!</h2>
      <form onSubmit={handleSubmit}>
        <Box display="flex"
          justifyContent="space-between" 
          className="img_click">
          <span style={{ cursor: "pointer"}} onClick={handleUploadClick}>{values.imgName}</span>
          {
            values.isImgSelected ? 
            <img src={cancel} onClick={cancelImg} alt="addIdeaFile"/> : 
            <img src={attachimg} onClick={handleUploadClick} alt="addIdeaFile"/> 
          }
          <input  
          onChange={(event) => handleChangeFile("media", event)}
          type="file" 
          ref={inputRef}
          style={{display: "none"}}
          />
        </Box>   
        <Box display="flex" justifyContent="space-between">
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={6}>
              <label for="firstName">First Name</label>
              <input required className="img_click" onChange={handleChange} value={values.firstName} type="text" name="firstName" />
            </Grid>
            <Grid item xs={12} md={6}>
              <label for="lastName">Last Name</label>
              <input required className="img_click" onChange={handleChange} value={values.lastName} type="text" name="lastName" />
            </Grid>
          </Grid>
        </Box>  
        <Box sx={{ py: 2 }}>
          <label for="peas">Share your story</label>
          <textarea required sx={{ my: 3 }} onChange={handleChange} value={values.story} name="story" cols="20" rows="3" placeholder="Share your story" />
        </Box>       
        <Grid container spacing={3} alignItems="center" >
          <Grid item xs={12} md={6}>
          <span>What did you interact with Vasiti as?</span>
          </Grid>
          <Grid item xs={12} md={6}>
            <input type="radio" name="status" onChange={handleChangeRadio} value="customer" />
            <span>Customer</span>
            <input type="radio" onChange={handleChangeRadio} name="status" value="vendor" />
            <span>Vendor</span>
          </Grid>
        </Grid>
        <Box style={{textAlign: "right"}} sx={{ py: 3 }}>
        <button className="custom_btn" type="submit">Share your story!</button>
        </Box>
      </form>
    </Box>
  )
}

export default ShareStories

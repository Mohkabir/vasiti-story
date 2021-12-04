import React from 'react';
import { Grid } from "@material-ui/core";

const SingleStory = ({story}) => {

  console.log(story.status);
  const statusState = story.status === "CUSTOMER"?"customer":"vendor";

  return (
    <Grid item xs={12} md={6} lg={4}>
      <img className="profile_img" src={story.img} alt="img" />
      <h3>{story.name}</h3>
      <span>{story.location} </span>
      <span className={`${statusState}`}>{story.status}</span>
      <p>{story.story}</p>
    </Grid>
  )
}

export default SingleStory

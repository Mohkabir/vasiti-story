import React from 'react';
import { Grid } from "@material-ui/core";
import { Box } from '@mui/system';
import SingleStory from './SingleStory';

const Stories = ({allStory}) => {
  return (
    <Box className="wrapper section_space" sx={{ py: 5 }}>
      <Grid container spacing={10}>
      {
        allStory?.map((story, index) => (
          <SingleStory key={index} story={story} />
        ))
      }
      </Grid>
    </Box>
  )
}

export default Stories

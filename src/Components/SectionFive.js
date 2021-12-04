import React from 'react';
import Stories from './Stories';
import { useSelector } from "react-redux";

const SectionFive = () => {

  const allstories = useSelector(state => state.story);
  
  return (
    <Stories allStory={allstories}/>
  )
}

export default SectionFive

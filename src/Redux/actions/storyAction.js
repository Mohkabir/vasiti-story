import * as actiontypes from "../actionTypes";

export const fetchStory = () => {

    return{
      type: actiontypes.FETCH_STORY
    }
}

export const createStory = (story) => { 
    return{
      type: actiontypes.CREATE_STORY,
      payload: story
    }
}

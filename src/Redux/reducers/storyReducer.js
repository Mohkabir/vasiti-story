import * as actiontypes from "../actionTypes";

import TemiImg from "../../asset/TemiImg.svg";
import PromiseImg from "../../asset/Promiseimg.svg";
import FeyisolaImg from "../../asset/Feyisolaimg.svg";
import KarenImg from "../../asset/KarenImg.svg";
import OluchiImg from "../../asset/OluchiImg.svg";
import AmosImg from "../../asset/Amosimg.svg";

const storiesArray = [
  {
    name: "Temi Obadofin",
    status: "VENDOR",
    img: TemiImg ,
    story: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim."
  },
  {
    name: "Promise Ejiofor",
    status: "VENDOR",
    img: PromiseImg,
    story: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim."
  },
  {
    name: "Feyisola Arinola",
    status: "VENDOR",
    img: FeyisolaImg,
    story: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Elit aute irure tempor cupidatat incididunt sint deser unt ut voluptate aute id deserunt nisi. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
  },
  {
    name: "Karen Ibeh",
    status: "VENDOR",
    img: KarenImg,
    story: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim."
  },
  {
    name: "Oluchi Uzo",
    status: "VENDOR",
    img: OluchiImg,
    story: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deser unt ut voluptate aute id deserunt nisi. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet"
  },
  {
    name: "Amos Okafor",
    status: "VENDOR",
    img: AmosImg,
    story: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Elit aute irure tempor cupidatat incididunt sint deser unt ut voluptate aute id deserunt nisi. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
  }
]

// const updatedStories = localStorage.getItem("stories")?JSON.parse(localStorage.getItem("stories")):storiesArray;

export const story = (state = storiesArray, action) => {
  switch (action.type) {
    case actiontypes.FETCH_STORY:
      return state;
      break;
      case actiontypes.CREATE_STORY:
        localStorage.setItem("stories", JSON.stringify(action.payload));
      return [action.payload, ...state];
      break;
    default:
      return state;
  }
}



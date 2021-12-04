import React, { useState } from 'react';

import JosephImg from "../asset/Joseph.svg";
import AdetolaImg from "../asset/Adetolaimg.svg";
import EmmanuelImg from "../asset/Emmanuelimg.svg";
import ChisomImg from "../asset/Chisomimg.svg";
import AdunoluwaImg from "../asset/Adunoluwaimg.svg";
import ChidiImg from "../asset/Chidiimg.svg";
import Stories from './Stories';

const SectionThree = () => {

  const storiesArray = [
    {
      name: "Joseph Ike",
      location: "In Ikeja",
      status: "CUSTOMER",
      img: JosephImg ,
      story: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim."
    },
    {
      name: "Adetola Fashina",
      location: "In Ikeja",
      status: "CUSTOMER",
      img: AdetolaImg,
      story: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim."
    },
    {
      name: "Emmanuel Fayemi",
      location: "In Akoka",
      status: "CUSTOMER",
      img: EmmanuelImg,
      story: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Elit aute irure tempor cupidatat incididunt sint deser unt ut voluptate aute id deserunt nisi. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
    },
    {
      name: "Chisom Obilor",
      location: "In Magodo",
      status: "VENDOR",
      img: ChisomImg,
      story: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim."
    },
    {
      name: "Adunoluwa Adeyemi",
      location: "Iwo Road",
      status: "VENDOR",
      img: AdunoluwaImg,
      story: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deser unt ut voluptate aute id deserunt nisi. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
      name: "Chidi Okeke",
      location: "In Somolu",
      status: "VENDOR",
      img: ChidiImg,
      story: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Elit aute irure tempor cupidatat incididunt sint deser unt ut voluptate aute id deserunt nisi. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
    }
  ]

 const [stories, setStories] = useState(storiesArray);

  return (
    <Stories allStory={stories}/>
  )
}

export default SectionThree
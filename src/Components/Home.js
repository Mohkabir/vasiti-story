import React from 'react';
import { useDispatch} from "react-redux";

import Nav from './Nav';
import SectionFive from './SectionFive';
import SectionFour from './SectionFour';
import SectionOne from './SectionOne';
import SectionThree from './SectionThree';
import SectionTwo from './SectionTwo';
import ModalComponent from './ModalComponent';
import Footer from './Footer';

const Home = () => {

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
      setOpen(false);
  };

  return (

    <div>
      <ModalComponent open={open} handleClose={handleClose}/>
      
      <Nav handleOpen={handleOpen}/>
      <SectionOne />
      <SectionTwo handleOpen={handleOpen}/>
      <SectionThree />
      <SectionFour handleOpen={handleOpen}/>
      <SectionFive />
      <Footer />
    </div>
  )
}

export default Home

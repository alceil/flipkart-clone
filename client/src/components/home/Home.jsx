import React from 'react';
import Slide from './Slide';
import { Box, makeStyles } from '@material-ui/core';
import { products } from '../../constants/product';
import Banner from './Banner';
import MidSlide from './MidSlide';
import MidSection from './MidSection';
import NavBar from './NavBar';

const useStyle = makeStyles({
  component: {
      padding: 10,
      background: '#F2F2F2'
  }
})

const Home = () => {
  const classes = useStyle();
  return(
      <div>
        <NavBar/>
        <Box className={classes.component}>
                <Banner />
                <MidSlide products={products} />
                <MidSection />
                <Slide
                    data={products} 
                    title='Discounts for You'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Suggested Items'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Top Selection'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Recommended Items'
                    timer={false} 
                    multi={true} 
                />
            </Box>
{/* <Banner/> */}
      </div>
      )
};

export default Home;

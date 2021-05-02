import React from 'react';
import About from '../About/About';
import Projects from '../Projects/Projects';
import TopBaner from '../TopBaner/TopBaner';

const Home = () => {
    return (
        <div>
           <TopBaner></TopBaner>
           {/* <About></About> */}
           <Projects></Projects>
        </div>
    );
};

export default Home;
import React from 'react';
import About from '../About/About';
import Blog from '../Blog/Blog';
import Footer from '../Footer/Footer';
import Projects from '../Projects/Projects';
import TopBaner from '../TopBaner/TopBaner';

const Home = () => {
    return (
        <div>
           <TopBaner></TopBaner>
           {/* <About></About> */}
            <Projects></Projects>
           <Blog></Blog>
           <Footer></Footer>
        </div>
    );
};

export default Home;
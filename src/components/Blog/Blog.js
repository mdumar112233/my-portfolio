import React from 'react';
import blog1 from '../../images/blog 1.jpg';
import blog2 from '../../images/blog 2.webp';
import blog3 from '../../images/blog 3.jpg';
import './Blog.css';


const Blog = () => {
    return (
        <div className='blog-container'>
            <div className="container">
            <div className="text-center">
                <h2 style={{color: '#FF0077',fontWeight: 'bold'}}>BLOG</h2>
                <h4>Read some of my article</h4>
            </div>
            <div className="row">
            <div class="col-md-3 card card-img" style={{width: '22rem'}}>
                <img src={blog1} alt=""/>
            <div class="card-body">
                <h5 class="card-title">Web Design</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            <div class="col-md-3 card card-img" style={{width: '18rem', marginLeft: '50px', marginRight: '50px'}}>
                <img src={blog2} alt=""/>
            <div class="card-body">
                <h5 class="card-title">Web Responsive</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            <div class="col-md-3 card card-img" style={{width: '18rem'}}>
                <img src={blog3} alt=""/>
            <div class="card-body">
                <h5 class="card-title">Application UI</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary" style={{backgroundColor: '#FF0077', border: 0}}>Read more</a>
            </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Blog;
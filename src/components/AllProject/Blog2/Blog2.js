import React from 'react';
import blog1  from '../../../images/javascript_wallpaper_by_mrhudson_db8gw2e-fullview.jpg';
import blog2  from '../../../images/jsblog-2.jpg';
import blog3  from '../../../images/3909258.jpg';
import Footer from '../../Footer/Footer';


const Blog2 = () => {
    return (
        <div className='blog-container'>
            <div className="container">
            <div className="text-center">
                <h2 style={{color: '#FF0077',fontWeight: 'bold'}}>BLOG</h2>
                <h4>Read some of my article</h4>
            </div>
            <div className="row mt-5">
                <div className="col-md-4">
                        <div class="card card-img" style={{width: '21rem'}}>
                        <img src={blog1} alt=""/>
                    <div class="card-body">
                        <h4 class="card-title">JavaScript String Method</h4>
                        <p class="card-text">when i need know any specific single word from a string than you can use this chartAt()......</p>
                        <a href='https://mdumarfaruk187326.medium.com/javascript-string-method-5760f7a8a20e' rel='noreferrer' target='_blank' class="btn btn-primary" style={{backgroundColor: '#FF0077', border: 0}}>Read more</a>
                    </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="card card-img" style={{width: '21rem'}}>
                        <img src={blog2} alt=""/>
                    <div class="card-body">
                        <h4 class="card-title">JavaScript Important Topic</h4>
                        <p class="card-text">try catch is important think to run a code on browser with error handling. Our expectation....</p>
                        <a href='https://mdumarfaruk187326.medium.com/javascript-important-topic-efab0bba19f4' rel='noreferrer' target='_blank'  class="btn btn-primary" style={{backgroundColor: '#FF0077', border: 0}}>Read more</a>
                    </div>
                    </div>
                </div>
                <div className="col-md-4">
                     <div class="card card-img" style={{width: '21rem'}}>
                        <img src={blog3} alt=""/>
                    <div class="card-body">
                        <h4 class="card-title">React Basic Fundamental</h4>
                        <p class="card-text">React is most popular library at right now every beginner fast think that this is a framework.....</p>
                        <a href='https://mdumarfaruk187326.medium.com/react-basic-fundamental-765d33391b04' rel='noreferrer' target='_blank' class="btn btn-primary" style={{backgroundColor: '#FF0077', border: 0}}>Read more</a>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blog2;
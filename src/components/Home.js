import React from 'react';
import { Link } from 'react-router-dom';

const Home = () =>{
    return (
    <div>
        <body>
        <div className="logo2">
      <img src="https://i.pinimg.com/originals/e5/2f/0d/e52f0d24ff3a3908f2f4c4d1205cdbb2.jpg" alt=""/>
      </div> 
    <div className="welcome-text">
    <h1>Book an appointment now!</h1>
    <Link to='/appointment'>Book Now!</Link>
    </div>
    </body>
    <div className="block-container">
    <center>
        <h2>There are three types of haircut:</h2><br/><br/>
        <div className="box1">
            <br/><br/>
            <h3>First Type</h3>
            <br/>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
        </div>
        <div className="box2">
            <br/><br/>
            <h3>Second Type</h3>
            <br/>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
        </div>
        <div className="box3">
            <br/><br/>
            <h3>Third Type</h3>
            <br/>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
        </div>
    </center>
    </div>
    

    </div>
    
    );
}


export default Home;
import React from 'react';
import {useNavigate} from "react-router-dom";
import './ErrorPage.css'



const ErrorPage=()=> {
    let navigate= useNavigate(); 
    const handleClick=()=>{
        
       navigate('/');
    }
    return (
        <div className='ErrorPage' style={{textAlign:'center', marginTop:'13rem'}} >
            {/* <div className='ErrorPageLanding'>
                <div>
                    <div style={{textAlign:'center'}}>
                        <img className="Image404" src='Images/image5.png' alt='404'></img>
                        <h1>Page Not Found</h1>
                    </div>
                    <button className='ErrorPageHome btn' onClick={handleClick}> Back to <span>Home Page</span></button>
                </div>
                
                <img className='RobotImage' src='Images/image6.png' alt='robot'></img>
            </div>
            <p style={{textAlign:'center', marginTop:'5%'}}>Our Robot had a small collision with a wall. We're in repair mode.</p> */}
            <h1>This page is under construction.</h1>
            <p>Please stay tuned!</p>
        </div>
    );
}

export default ErrorPage;

import React from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import Classes from './Homepage.module.css';
import Topbar from './Topbar';

const Homepage = () =>{
    const onSigninClick = () =>{
        <Redirect to={"/login"}/>
    }
    return (
        <div>
            <Topbar/>
            <div className={Classes.container}>
                <h1 className={Classes.heading}>HOSTEL ALLOCATION</h1>
                <h2 className={Classes.subheading}>Please sign-in</h2>
                <Link to={'/login'}><button onClick={onSigninClick} className={Classes.googleBtn}><i className={"fab fa-google"}></i>Sign in with Google</button></Link>
                <Link to={'/login'}><button onClick={onSigninClick} className={Classes.facebookBtn}><i className={"fab fa-facebook-square"}></i>Sign in with Facebook</button></Link>
            </div>
        </div>
    )
}

export default Homepage
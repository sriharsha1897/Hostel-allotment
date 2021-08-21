import React from 'react';
import { Link } from 'react-router-dom';
import Classes from './Mainpage.module.css';
import Topbar from './Topbar';

class Mainpage extends React.Component{
    render(){
        return(
            <div>
                <Topbar/>
                <div className={Classes.container}>
                    <div className={Classes.contentWrapper}>
                        <h1 className={Classes.heading}>Welcome Sriharsha</h1>
                        <h2 className={Classes.message}>You have already booked a room.</h2>
                        <h2 className={Classes.subheading}>Your room details are as follows : </h2>
                        <p className={Classes.details}>Hostel No - <span>B4</span></p>
                        <p className={Classes.details}>Room No -<span>8</span></p>
                    </div>
                    <Link to={'/gender'}><button className={Classes.btn}>Choose a new Accomodation</button></Link>
                </div>
            </div>
        )
    }
    
}
export default Mainpage
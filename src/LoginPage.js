import React from 'react';
import { Redirect } from 'react-router';
import Classes from './LoginPage.module.css';
import Topbar from './Topbar';
import { Link } from 'react-router-dom';

class LoginPage extends React.Component{
    state = {
        userLoggedIn : false
    }
    loginSubmit = () =>{
        this.setState({userLoggedIn : true});
        <Redirect to={'/main'}/>
    }
    render(){
        return(
            <div>
                <Topbar/>
                <div className={Classes.container}>
                    <form onSubmit={this.loginSubmit} className={Classes.form}>
                        <h1 className={Classes.heading}>LOGIN</h1>
                        <input className={[Classes.input].join(' ')}type="text" name="" placeholder="Username"/>
                        <input className={[Classes.input].join(' ')}type="password" name="" placeholder="Password"/>
                        <Link to={'/main'}><input className={[Classes.input].join(' ')}type="submit" value="Submit"/></Link>
                    </form>
    
                </div>
            </div>
        )
    }
    
}
export default LoginPage      
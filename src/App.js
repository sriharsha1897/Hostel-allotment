import './App.css';
import SuccessPage from './SuccessPage';
import Homepage from './Homepage';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import LoginPage from './LoginPage';
import React from 'react';
import Mainpage from './Mainpage';
import ChooseGender from './ChooseGender';
import ChooseHostel from './ChooseHostel';
import ChooseFloor from './ChooseFloor';

class App extends React.Component{
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path={"/login"} component={LoginPage}/>
            <Route path={'/main'} component={Mainpage}/>
            <Route path={'/gender'} component={ChooseGender}/>
            <Route path={'/hostel'} component={ChooseHostel}/>
            <Route path={'/floor'} component={ChooseFloor}/>
            <Route path={'/success'} component={SuccessPage}/>
            <Route path={'/'} component={Homepage}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;

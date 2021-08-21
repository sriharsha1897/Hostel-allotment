import React from 'react';
import { Link } from 'react-router-dom';
import Classes from './ChooseFloor.module.css';
import Topbar from './Topbar';

class ChooseFloor extends React.Component{
    state = {
        showBookBtn : false
    }
    room = [1,2,3,4,5,6,7,8,9,10];
    onbtnClick = () =>{
        this.setState({showBookBtn : true});
    }
    render(){
        var buttonGenerate = this.room.map((item,index) =>{
            return <button onClick={()=> this.onbtnClick()} className={Classes.btn} key={index}>{item}</button>
        });
        return (
            <div>
                <Topbar/>
                <div className={Classes.container}>
                    <h1 className={Classes.mainheading}>Choose a Floor</h1>
                    <select className={Classes.option}>
                        <option value="1">Floor 1</option>
                        <option value="1">Floor 2</option>
                        <option value="1">Floor 3</option>
                    </select>
                    <div className={Classes.choiceWrapper}>
                        {buttonGenerate}
                    </div>
                </div>
                <div>
                {
                    this.state.showBookBtn ? <Link to={'/success'}><button className={Classes.bookBtn}>Book Room</button></Link>
                    : null
                }
                </div>
            </div>
        )
    }
}
export default ChooseFloor
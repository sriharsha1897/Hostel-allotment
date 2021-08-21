import { Link } from 'react-router-dom';
import Classes from './ChooseHostel.module.css';
import Topbar from './Topbar';

const ChooseHostel = () => {
    const Hostel = ['B1', 'B2', 'B3', 'B4', 'B5', 'B6'];
    return (
        <div>
        <Topbar/>
        <div className={Classes.container}>
            <h1 className={Classes.heading}>Choose a Hostel</h1>
            <div className={Classes.btnWrapper}>
                {Hostel.map((item, index) => {
                    return <Link to={'/floor'}><button className={Classes.btn} key={index}>{item}</button></Link>
                })}
            </div>
        </div>
        </div>
    )
}
export default ChooseHostel

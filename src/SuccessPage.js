import Classes from './SuccessPage.module.css';
import Topbar from './Topbar';

const SuccessPage = () =>{
    return (
        <div>
        <Topbar/>
        <div className={Classes.container}>
            <div className={Classes.contentWrapper}>
            <i className={`${Classes.icon} far fa-times-circle`}></i>
                <h1 className={Classes.heading}>Success</h1>
                <h2 className={Classes.message}>Your room has been booked successfully.</h2>
                <h2 className={Classes.subheading}>Your room details are as follows : </h2>
                <p className={Classes.details}>Hostel No -<span>B4</span></p>
                <p className={Classes.details}>Room No -<span>8</span></p>
            </div>
        </div>
    </div>
    )
}
export default SuccessPage
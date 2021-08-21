import { Link } from 'react-router-dom';
import Classes from './ChooseGender.module.css';
import Topbar from './Topbar';

const ChooseGender = () =>{
    return (
        <div>
            <Topbar/>
            <div className={Classes.container}>
                <h1 className={Classes.mainheading}>Choose your Hostel</h1>
                <div className={Classes.choiceWrapper}>
                    <div className={[Classes.choiceDiv, Classes.girlHostel].join(' ')}>
                        <Link to={'/hostel'}>
                        <img className={Classes.avatar} src={'https://image.freepik.com/free-vector/smiling-girl-avatar_102172-32.jpg'} alt="Girls Hostels"/>
                        <h2 className={Classes.subheading}>Girls Hostels</h2>
                        </Link>
                    </div>
                    <div className={[Classes.choiceDiv, Classes.boyHostel].join(' ')}>
                        <Link to={'/hostel'}>
                        <img className={Classes.avatar} src={'https://static.vecteezy.com/system/resources/thumbnails/001/503/756/small/boy-face-avatar-cartoon-free-vector.jpg'} alt="Boys Hostels"/>
                        <h2 className={Classes.subheading}>Boys Hostels</h2>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ChooseGender
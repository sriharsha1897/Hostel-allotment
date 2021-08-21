import Classes from './Topbar.module.css';
import logo from './Image/logo.png'

const Topbar = () =>{
    return(
        <header className={Classes.topbar}>
            <img className={Classes.logo} src={logo} alt="logo"/>
            <h1 className={Classes.logoText}><strong>HOSTEL</strong></h1>
        </header>
    )
}

export default Topbar

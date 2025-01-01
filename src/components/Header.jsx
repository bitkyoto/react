import './Header.css';
import logo from '../assets/logo.svg';
export default function Header(){
    return (
        <header className='header'>
            <div className='logo-container'>
                <img src={logo} alt="Logo" className='logo' />
            </div>
            <ul className='header_ul'>
                <li className="item">About Us</li>
                <li className="item">Movies</li>
                <li className="item">My profile</li>
                <li className="item">Settings</li>
            </ul>
        </header>
    )
}
import './Header.css';
import logo from '../assets/react.svg';
export default function Header(){
    return (
        <header className='header'>
            <div className='logo-container'>
                <img src={logo} alt="Logo" className='logo' />
            </div>
            <ul className='header_ul'>
                <li className="item">About Us</li>
                <li className="item">Movies</li>
            </ul>
        </header>
    )
}
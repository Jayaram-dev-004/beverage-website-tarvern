import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import logo from '../../assets/logo.png';
import useMediaQuery from "@mui/material/useMediaQuery";
import './Header.css'

const Header = ({isLogo,Absolute = '',display = false}) => {

    const navigate = useNavigate();

    const nagigateToHome = () => {
        navigate('/Home02')
    }

    const isSmallscreen = useMediaQuery("(max-width : 550px)")
    
    return(
        <div className={`main-header-container ${Absolute}`}>
            <header className="main-header">
                {/* Header List items */}
                <ul className='main-header-lists-menu'>
                    <li className="main-header-list-item item1"><Link to="/BeverageLocator" className="main-header-link">Find</Link></li>
                    <li className="main-header-list-item item2"><Link to="/PremiumSpirits" className="main-header-link">Shop</Link></li>
                    <li className="main-header-list-item item3"><Link to="/Contact" className="main-header-link">Contact</Link></li>
                </ul>

                {/* LOGO */}
                {(!isLogo)?
                (<div className={`main-header-logo fade-in scale slide-left ${(isSmallscreen && display) ? 'small-screen' : ''}`}>
                    <img src={logo} alt="Logo" onClick={nagigateToHome}/>
                </div>): ""}
            </header>
        </div>
    )
}

export default Header;


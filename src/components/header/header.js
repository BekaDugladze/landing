import React, {useState} from "react";
import logo from '../../pic/modern-logo-with-hexagon-red-purple.png'
import './header.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export function Header() {
    const [drop, setDrop] = useState(false)
    const [menu, setMenu] = useState(false)
    return(
        <div className="flex flex-row justify-around items-center fixed z-50 w-full bg-purple-50">
            <img src={logo} alt="Logo" style={{
                width: '70px',
                height: 'auto'
            }} />
            <div className="flex flex-row">
                <ul className="flex flex-row headerUl">
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <div className="flex flex-col">
                        <li onMouseOver={() => setDrop(true)}
                            onMouseOut={() => setDrop(false)}>Dropdown</li>
                            {drop && 
                            <ul  onMouseOut={() => setDrop(false)} onMouseOver={() => setDrop(true)} 
                            className="fixed mt-6 bg-purple-50 dropUl">
                                <li>Dropdown 1</li>
                                <li>Dropdown 2</li>
                                <li>Dropdown 3</li>
                                <li>Dropdown 4</li>
                                <li>Dropdown 5</li>
                            </ul>}
                    </div>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <button onClick={() => setMenu(true)} id="menu">Menu <FontAwesomeIcon icon={faBars} style={{marginLeft: '5px'}}/></button>
                {menu && (
                    <div className="fixed w-screen h-screen flex flex-col justify-center items-center bg-purple-50 sm:hidden top-0 left-0">
                        <button className="text-red-700 text-lg text-right w-full" onClick={() => setMenu(false)}>Close</button>
                        <ul className="flex flex-col mobileUl">
                            <li><a href="#about">About</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <div className="flex flex-col">
                                    <li onClick={() => setDrop(prev => !prev)}>Dropdown</li>
                                    {drop && 
                                    <ul 
                                    className="flex flex-col bg-purple-50 dropUl">
                                        <li>Dropdown 1</li>
                                        <li>Dropdown 2</li>
                                        <li>Dropdown 3</li>
                                        <li>Dropdown 4</li>
                                        <li>Dropdown 5</li>
                                    </ul>}
                            </div>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}
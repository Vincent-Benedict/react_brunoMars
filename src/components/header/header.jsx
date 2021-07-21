import React, { useState, useEffect, useContext } from 'react'
import logo from '../../assets/bruno.png'
import dropdownLogo from '../../assets/dropdown.png'
import './header.css'
import AppContext from "../AppContext/AppContext";
import { Link } from 'react-router-dom';

export default function Header(){

    const myContext = useContext(AppContext);

    const showDropdown = () => {
        const hiddenMenu = document.getElementById('hidden-menu')
        
        if(hiddenMenu.style.display === "none" || hiddenMenu.style.display === "") 
            hiddenMenu.style.display = "block"
        else 
            hiddenMenu.style.display = "none"
    }

    const toogleDark = () => {
        myContext.toogleDark();
    }

    if(myContext.darkMode === true){
        var text = (
            <p onClick={toogleDark}>Light Theme</p>
        )
    } else{
        var text = (
            <p onClick={toogleDark}>Dark Theme</p>
        )
    }

    return (
        <header>
            <div className="container">
                <div className="left-header">
                    <img id="logo" src={logo} alt="" />
                </div>
                <div className="right-header">
                    <Link className="link" to={`/`}>
                         <p>Our List</p>
                    </Link>
                    <Link className="link" to={`/search`}>
                        <p>Search</p>
                    </Link>
                    <Link className="link" to={`/favorite`}>
                        <p>Favorites</p>
                    </Link>
                </div>

                <div className="hamburger-menu">
                    <img onClick={showDropdown} id="dropdown-logo" src={dropdownLogo} alt="" />

                    <div id="hidden-menu" className="right-header-hidden">
                        <Link className="link" to={`/`}>
                            <p>Our List</p>
                        </Link>
                        <Link className="link" to={`/search`}>
                            <p>Search</p>
                        </Link>
                        <Link className="link" to={`/favorite`}>
                            <p>Favorites</p>
                        </Link>
                        <div>
                            {text}
                        </div>
                    </div>
                </div>
            </div>

            <div onClick={toogleDark} className="dark-theme">
                {text}
            </div>

        </header>
    )
}
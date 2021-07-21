import React, { useState, useEffect, useContext } from 'react'
import AppContext from "../AppContext/AppContext";
import Header from '../header/header';
import Footer from '../footer/footer';
import './Loading.css'

export default function Loading(){

    const myContext = useContext(AppContext);

    return(
        <React.Fragment>
        <Header/>
        <main className={myContext.darkMode ? "main-dark" : "main-light"}>
            <div className={myContext.darkMode ? "containerLoad containerLoad-dark": "containerLoad"}>
                <p>Please Wait...</p>
                <p>We Are Processing Your Request.</p>
            </div>
        </main>
        <Footer/>
        </React.Fragment>
    )

}
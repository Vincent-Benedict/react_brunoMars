import React, { useState, useEffect, useContext } from 'react'
import './TesPage.css'
import AppContext from "../../components/AppContext/AppContext";

export default function TesPage(){

    const myContext = useContext(AppContext);

    return(
        <div className={myContext.darkMode ? "dark" : "light"}>
            tes
        </div>
    )
}

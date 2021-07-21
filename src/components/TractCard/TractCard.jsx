import React, { useState, useEffect, useContext } from 'react'
import AppContext from "../../components/AppContext/AppContext"
import './TractCard.css'

export default function TractCard(props) {

    const myContext = useContext(AppContext);
    const track = props.track;
    const index = props.index;

    return (
        <div className={myContext.darkMode ? "track-card track-card-dark" : "track-card"}>
            <div className={myContext.darkMode ? "track-card-left track-card-left-dark" : "track-card-left"}>
                <div className="track-card-index">
                    <p>{index+1}</p>
                </div>
                <div>
                    <p>{track.name}</p>
                </div>  
            </div>
            <div className="track-card-right">
                <audio src={track.preview_url} controls></audio>
            </div>
        </div>
    )
}
import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom';
import AppContext from "../../components/AppContext/AppContext";
import './AlbumCard.css'

export default function AlbumCard(props){

    const myContext = useContext(AppContext);

    const album = props.album

    return (
        <Link to={`/album/${album.id}`} className={myContext.darkMode ? "album-card dark-card" : "album-card"}>
            <div className="album-card-name">
                <p className={myContext.darkMode ? "album-text dark-album-text" : "album-text"}>{album.name}</p>
            </div>
            
            <img src={album.image} alt="" />
        </Link>
    )
}
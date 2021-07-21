import React, { useState, useEffect, useContext } from 'react'
import AppContext from "../../components/AppContext/AppContext";
import brunoLogo from "../../assets/brunomars-icon.png"
import { gql, useQuery } from '@apollo/client'
import {useParams} from 'react-router-dom'
import TractCard from '../../components/TractCard/TractCard';
import './AlbumPage.css'
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Loading from '../../components/LoadingComponents/Loading';

export default function AlbumPage(){

    const myContext = useContext(AppContext);
    let {id} = useParams()
    
    const QUERY = gql`
        query album($id: String!){
            album(id: $id){
                id,
                name,
                image,
                tracks{
                    id
                    name
                    preview_url
                }
            }
        }
    `

    const {loading, error, data} = useQuery(QUERY,  {
        variables: {
            id: id
        }
    })

    if(loading) return <Loading/>
    const album = data.album
    const tracks = data.album.tracks

    return(
        <React.Fragment>
        <Header/>
        <main className={myContext.darkMode ? "main-dark" : "main-light"}>
            <div id="albumPage-container">
                <div id="albumPage-header">
                    <div id="album-image-container">
                        <img className={myContext.darkMode ? "album-image album-image-dark" : "album-image"} src={album.image} alt="" />
                    </div>
                    
                    <div id="albumPage-right">
                        <p id="album-name" className={myContext.darkMode ? "album-name-dark" : "album-name-light"}>{album.name}</p>
                        <div id="album-icon">
                            <img src={brunoLogo} alt="" />
                            <p className={myContext.darkMode ? "total-tracks-dark" : "total-tracks-light"}>Total Tracks : {tracks.length}</p>
                        </div>
                        <div className="fav-icon">
                            <svg onClick={() => { 
                                myContext.checkIsFoundFav(album) ? myContext.removeFromFav(album) : myContext.addToFav(album) 
                            }} xmlns="http://www.w3.org/2000/svg" className={myContext.checkIsFoundFav(album) ? "svg-found" : "svg-not-found"} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            <p className={myContext.darkMode ? "fav fav-dark" : "fav"}>Favourite</p>
                        </div>
                        
                    </div>
                </div>

                <div id="albumPage-body">
                    {
                        tracks?.map((track, index) => {
                            return (<TractCard key={track.id} track={track} index={index}/>)
                        })
                    }
                </div>
            </div>
        </main>
        <Footer/>
        </React.Fragment>
    )
}
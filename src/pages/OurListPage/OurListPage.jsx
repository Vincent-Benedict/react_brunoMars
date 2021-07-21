import React, { useState, useEffect, useContext } from 'react'
import AppContext from "../../components/AppContext/AppContext";
import { gql, useQuery } from '@apollo/client'
import './OurListPage.css'
import AlbumCard from '../../components/AlbumCard/AlbumCard';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Loading from '../../components/LoadingComponents/Loading';

export default function OurListPage(){

    const myContext = useContext(AppContext);

    const QUERY = gql`
    query artist($name: String!){
        artist(name: $name){
          id,
          name,
          image,
          albums{
            id
            name
            image
          }
        }
      }
    `

    const {loading, error, data} = useQuery(QUERY,  {
        variables: {
            name: "Bruno Mars"
        }
    })

    if(loading) return <Loading/>

    const artist = data.artist
    const albums = data.artist.albums

    return (
        <React.Fragment>
        <Header/>
        <main className={myContext.darkMode ? "main-dark" : "main-light"}>
            <div className="listPage-container">
                <div id="listPage-header">
                    <div>
                        <p className={myContext.darkMode ? "text-dark" : "text-light"}>{artist.name}</p>
                    </div>
                    <div id="thumbnail">
                        <img className={myContext.darkMode ? "img-dark" : "img-light"} src={artist.image} alt="" />
                    </div>
                    
                </div>
                <div id="listPage-body">
                    <div id="listPage-albums-header">
                        <p className={myContext.darkMode ? "text-dark" : "text-light"}>Total Albums : {artist.albums.length} Albums</p>
                    </div>
                    <div id="listPage-albums">
                        { 
                            albums?.map((album) => {
                                return (
                                    <AlbumCard key={album.id} album={album}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </main>
        <Footer/>
        </React.Fragment>
    )

}
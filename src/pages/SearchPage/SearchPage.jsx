import React, { useState, useEffect, useContext } from 'react'
import AppContext from "../../components/AppContext/AppContext";
import { gql, useQuery } from '@apollo/client'
import './SearchPage.css'
import AlbumCard from '../../components/AlbumCard/AlbumCard';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Loading from '../../components/LoadingComponents/Loading';

export default function SearchPage(){

    const myContext = useContext(AppContext)
    const [input, setInput] = useState("")
    const [myAlbums, setMyAlbums] = useState([])

    const QUERY = gql`
    query artist($name: String!){
        artist(name: $name){
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

    useEffect(() => {
        if(input.length > 0){
            setMyAlbums(data.artist.albums.filter((a) => {
                return a.name.toLowerCase().match(input.toLowerCase())
            }))            
        } else{
            setMyAlbums(data.artist.albums)
        }
    }, [input])

    useEffect(() => {
        if(!loading){
            setMyAlbums(data.artist.albums)
        }
    }, [loading])

    if(loading) return <Loading/>

    return(
        <React.Fragment>
            <Header/>
            <main className={myContext.darkMode ? "main-dark" : "main-light"}>
                <div className="search-container">
                    <div id="searchPage-header">
                        <input 
                            className={myContext.darkMode ? "search-textField search-textField-dark" : "search-textField"} 
                            type="text" 
                            placeholder="Search Bruno Mars' Album"
                            onChange={(e) => {
                                setInput(e.target.value)
                            }}
                        />
                    </div>
                    <div id="searchPage-albums">
                        { 
                            myAlbums?.map((album) => {
                                return (
                                    <AlbumCard key={album.id} album={album}/>
                                )
                            })
                        }
                    </div>
                </div>
            </main>
            <Footer/>
        </React.Fragment>
    )


}
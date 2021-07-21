import React, { useState, useEffect, useContext } from 'react'
import AppContext from "../../components/AppContext/AppContext";
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Loading from '../../components/LoadingComponents/Loading';
import './FavoritePage.css'

export default function FavoritePage(){

    const myContext = useContext(AppContext);
    const favList = myContext.favorite

    console.log(favList);

    if(favList.length == 0){
        var componentRendered = (
            <React.Fragment>
                <div className="no-albums-fav">
                    <p className={myContext.darkMode ? "no-album no-album-dark" : "no-album"}>You don't have Favorite Albums</p>
                </div>
            </React.Fragment>
            
        )
    } else {
        var componentRendered = (
            <React.Fragment>
                 <div id="favoritePage-header">
                        <p className={myContext.darkMode ? "title-dark" : "title-light"}>Your Favorites</p>
                    </div>

                    <div id="favoritePage-body">
                        {
                            favList?.map((f) => {
                                return (
                                    <div className={myContext.darkMode ? "fav-card fav-card-dark" : "fav-card"}>
                                        <div className="fav-card-left">
                                            <div className="fav-card-img">
                                                <img src={f.image} alt="" />
                                            </div>

                                            <div className={myContext.darkMode ? "fav-card-name fav-card-name-dark" : "fav-card-name"}>
                                                <p>{f.name}</p>
                                            </div>
                                        </div>

                                        <div className="fav-card-right">
                                            <svg onClick={() => { 
                                                myContext.checkIsFoundFav(f) ? myContext.removeFromFav(f) : myContext.addToFav(f) 
                                            }} xmlns="http://www.w3.org/2000/svg" className={myContext.checkIsFoundFav(f) ? "svg-found-fav" : "svg-not-found-fav"} viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                            </svg>
                                        </div>
                                        

                                    </div>
                                )
                            })
                        }
                    </div>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <Header/>
            <main className={myContext.darkMode ? "main-dark" : "main-light"}>
                <div id="favoritePage-container">
                   {componentRendered}
                </div>
            </main>
            <Footer/>
        </React.Fragment>
    )



}
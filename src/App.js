import logo from './logo.svg';
import React, { useState, useEffect } from 'react'
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import TesPage from './pages/tesPage/TesPage';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import AppContext from './components/AppContext/AppContext';
import OurListPage from './pages/OurListPage/OurListPage';
import AlbumPage from './pages/AlbumPage/AlbumPage';
import SearchPage from './pages/SearchPage/SearchPage';
import FavoritePage from './pages/FavoritePage/FavoritePage';

function App() {

  const [darkMode, setDarkMode] = useState(false)
  const [favorite, setFavorite] = useState([])

  const toogleDark = () => {
    setDarkMode(!darkMode)  
  }

  const addToFav = (fav) => {
    setFavorite([...favorite, fav])
  }

  const removeFromFav = (fav) => {
    setFavorite(favorite.filter(item => item.name !== fav.name))
  }

  const checkIsFoundFav = (fav) => {
    for(let f of favorite){
      if(fav.id == f.id) return true
    }
    return false
  }

  const context = {
    darkMode: darkMode,
    favorite: favorite,
    setDarkMode,
    setFavorite,
    toogleDark,
    addToFav,
    removeFromFav,
    checkIsFoundFav
  }

  return (
    <AppContext.Provider value={context}>
      
      <Router>
      {/* <Header/> */}
        <Switch>
          <Route path="/favorite">
            <FavoritePage/>
          </Route>
          <Route path="/search">
            <SearchPage/>
          </Route>
          <Route path="/album/:id">
            <AlbumPage/>
          </Route>
          <Route path="/">
            <OurListPage/>
          </Route>
        </Switch>
      </Router>
      {/* <Footer/> */}
    </AppContext.Provider>
  );
}

export default App;

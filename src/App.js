import './App.css';
import React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import SearchBar from './SearchBar';
import Gallery from './Gallery';
import { DataContext } from './context/DataContext';
import { SearchContext } from './context/SearchContext';
import { useRef } from 'react';
import ArtistView from './ArtistView';
import AlbumView from './AlbumView';

function App() {

  let [message, setMessage] = useState("Search for Music!")
  let [data, setData] = useState([])
  let searchInput = useRef("")

  const API_URL = "https://itunes.apple.com/search?term="

  const handleSearch = (e, term) => {
    e.preventDefault()
    async function fetchData() {
      document.title = `${term} Music`
      const response = await fetch(API_URL + term)
      const resData = await response.json()
      if (resData.results.length > 0) {
        setData(resData.results)
      } else {
        setMessage("Not found")
      }
    }
    fetchData()
  }

  return (
    <div className="App">
      {message}
      <Router>
        <Routes>
          <Route exact path="/" element={
            <div>
              <SearchContext.Provider value={{
                term: searchInput,
                handleSearch: handleSearch
              }}>
                <SearchBar />
              </SearchContext.Provider>
              <DataContext.Provider value={data}>
                <Gallery />
              </DataContext.Provider>
            </div>
          } />
          <Route path="/album/:id" element={<AlbumView />} />
          <Route path="/artist/:id" element={<ArtistView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
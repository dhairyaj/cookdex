import React from 'react'
import Home from './Home'
import Cuisine from './Cuisine';
import { Routes, Route } from "react-router-dom";
import SearchedItem from './SearchedItem';

function Pages() {
  return (
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cuisine/:type" element={<Cuisine />}/>
        <Route path="/find/:search" element={<SearchedItem />} />
      </Routes>
  )
}

export default Pages
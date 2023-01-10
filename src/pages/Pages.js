import React from 'react'
import Home from './Home'
import Cuisine from './Cuisine';
import { Routes, Route } from "react-router-dom";
import SearchedItem from './SearchedItem';
import RecipieDetails from './RecipieDetails';

function Pages() {
  return (
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cuisine/:type" element={<Cuisine />}/>
        <Route path="/find/:search" element={<SearchedItem />} />
        <Route path="/recipe/:id" element={<RecipieDetails />} />
      </Routes>
  )
}

export default Pages
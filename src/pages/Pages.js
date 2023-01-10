import React from 'react'
import Home from './Home'
import Cuisine from './Cuisine';
import { Routes, Route, useLocation } from "react-router-dom";
import SearchedItem from './SearchedItem';
import RecipieDetails from './RecipieDetails';
import { AnimatePresence } from 'framer-motion';

function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/find/:search" element={<SearchedItem />} />
        <Route path="/recipe/:id" element={<RecipieDetails />} />
      </Routes>
    </AnimatePresence>
  )
}

export default Pages
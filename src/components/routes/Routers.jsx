import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FruitPage from '../pages/FruitPage';
import DairyPage from '../pages/DairyPage';
import AddToCart from '../pages/AddToCart';
import Home from '../pages/Home';
import VegetablePage from '../pages/VegetablePage';
import Wishlist from '../pages/Wishlist';
const Routers = () => {
    return (
        <div className="ml-64 p-4"> {/* Push content to the right of sidebar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/FruitPage" element={<FruitPage />} />
          <Route path="/VegetablePage" element={<VegetablePage />} />
          <Route path="/DairyPage" element={<DairyPage />} />
          <Route path="/Wishlist" element={<Wishlist />} />
          <Route path="/AddToCart" element={<AddToCart />} />
        </Routes>
      </div>
    );
}

export default Routers;

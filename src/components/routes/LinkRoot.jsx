import React from "react";
import { Link } from "react-router-dom";

const LinkRoot = () => {
  return (
    <div className="h-screen w-60 bg-gray-800 text-white fixed top-0 left-0 p-4">
      <h2 className="text-xl font-bold mb-4">Navigation</h2>
      <nav className="flex flex-col space-y-3">
        <Link to="/" className="hover:bg-gray-700 p-2 rounded">Home</Link>
        <Link to="/FruitPage" className="hover:bg-gray-700 p-2 rounded">Fruits</Link>
        <Link to="/VegetablePage" className="hover:bg-gray-700 p-2 rounded">Vegetables</Link>
        <Link to="/DairyPage" className="hover:bg-gray-700 p-2 rounded">Dairy</Link>
        <Link to="/Wishlist" className="hover:bg-gray-700 p-2 rounded">Wishlist</Link>
        <Link to="/AddToCart" className="hover:bg-gray-700 p-2 rounded">Cart</Link>
      </nav>
    </div>
  );
};

export default LinkRoot;

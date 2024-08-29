import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FoodSupplements from './FoodSupplements';
import TestingKits from './TestingKits';

const Categories = () => {
  return (
    <>
      <Routes>
        <Route path="FoodSupplements" element={<FoodSupplements />} />
        <Route path="TestingKits" element={<TestingKits />} />
        
      </Routes>
    </>
  );
};

export default Categories;

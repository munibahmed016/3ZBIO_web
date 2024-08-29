import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FoodSupplements from './FoodSupplements';
import TestingKits from './TestingKits';
import SkinCare from './SkinCare';
import HealthCare from './HealthCare';

const Categories = () => {
  return (
    <>
      <Routes>
        <Route path="FoodSupplements" element={<FoodSupplements />} />
        <Route path="TestingKits" element={<TestingKits />} />
        <Route path='SkinCare' element={<SkinCare/>}/>
        <Route path='HealthCare' element={<HealthCare/>}/>
      </Routes>
    </>
  );
};

export default Categories;

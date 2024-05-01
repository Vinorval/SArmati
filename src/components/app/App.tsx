import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navigation from '../navigation/Navigation';

import HomePage from '../../pages/HomePage';
import BrendsPage from '../../pages/BrendsPage';
import LensTypePage from '../../pages/LensTypePage';
import LensItemPage from '../../pages/LensItemPage';

import CompanyPage from '../../pages/CompanyPage';
import AddressPage from '../../pages/AddressPage';

import ArticlesPage from '../../pages/ArticlesPage';
import ArticlesItemPage from '../../pages/ArticlesItemPage';

import NotFoundPage from '../../pages/NotFoundPage';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/brands" element={<BrendsPage />} />
        <Route path="/brands/:lenses" element={<LensTypePage />} />
        <Route path="/brands/:lenses/:lensId" element={<LensItemPage/>} />

        <Route path="/company" element={<CompanyPage />} />
        <Route path="/address" element={<AddressPage />} />

        <Route path="/articles" element={< ArticlesPage />} />
        <Route path="/articles/:articleId" element={<ArticlesItemPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;

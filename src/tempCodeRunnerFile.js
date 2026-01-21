import React, { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import './css/index.css';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import AppContextProvider from './contexts/AppContext';
import MainLayout from './layouts/MainLayout';
import SearchBar from './utils/SearchBar';

const LazyHome = lazy(() => import('./pages/Home'));
const LazyProducts = lazy(() => import('./pages/Products'));
const LazyCart = lazy(() => import('./pages/Cart'));
const LazyContact = lazy(() => import('./pages/Contact'));
const LazyAbout = lazy(() => import('./pages/About'));
const LazyBranch = lazy(() => import('./pages/Branch'));
const LazyGranites = lazy(() => import('./products/Granites'));
const LazyMarbles = lazy(() => import('./products/Marbles'));
const LazyItalianMarbles = lazy(() => import('./products/ItalianMarbles'));
const LazyOnyxStones = lazy(() => import('./products/OnyxStones'));
const LazySandStones = lazy(() => import('./products/SandStones'));
const LazyTiles = lazy(() => import('./products/Tiles'));
const LazyVietnamMarbles = lazy(() => import('./products/VietnamMarbles'));

const Root = () => (
  <Router>
    <AppContextProvider>
      <Routes>
        <Route path="/" element={<Suspense fallback={<div>Loading...</div>}><LazyHome /></Suspense>} />
        <Route path="/products" element={<Suspense fallback={<div>Loading...</div>}><LazyProducts /></Suspense>} />
        <Route path="/products/granites" element={
          <MainLayout>
            <div className="p-2 sm:ml-64">
              <SearchBar>
                <Suspense fallback={<div>Loading...</div>}><LazyGranites /></Suspense>
              </SearchBar>
            </div>
          </MainLayout>
        } />
        <Route path="/products/marbles" element={
          <MainLayout>
            <div className="p-2 sm:ml-64">
              <SearchBar>
                <Suspense fallback={<div>Loading...</div>}><LazyMarbles /></Suspense>
              </SearchBar>
            </div>
          </MainLayout>
        } />
        <Route path="/products/italian-marbles" element={
          <MainLayout>
            <div className="p-2 sm:ml-64">
              <SearchBar>
                <Suspense fallback={<div>Loading...</div>}><LazyItalianMarbles /></Suspense>
              </SearchBar>
            </div>
          </MainLayout>
        } />
        <Route path="/products/onyx-stones" element={
          <MainLayout>
            <div className="p-2 sm:ml-64">
              <SearchBar>
                <Suspense fallback={<div>Loading...</div>}><LazyOnyxStones /></Suspense>
              </SearchBar>
            </div>
          </MainLayout>
        } />
        <Route path="/products/sand-stones" element={
          <MainLayout>
            <div className="p-2 sm:ml-64">
              <SearchBar>
                <Suspense fallback={<div>Loading...</div>}><LazySandStones /></Suspense>
              </SearchBar>
            </div>
          </MainLayout>
        } />
        <Route path="/products/tiles" element={
          <MainLayout>
            <div className="p-2 sm:ml-64">
              <SearchBar>
                <Suspense fallback={<div>Loading...</div>}><LazyTiles /></Suspense>
              </SearchBar>
            </div>
          </MainLayout>
        } />
        <Route path="/products/vietnam-marbles" element={
          <MainLayout>
            <div className="p-2 sm:ml-64">
              <SearchBar>
                <Suspense fallback={<div>Loading...</div>}><LazyVietnamMarbles /></Suspense>
              </SearchBar>
            </div>
          </MainLayout>
        } />
        <Route path="/cart" element={<Suspense fallback={<div>Loading...</div>}><LazyCart /></Suspense>} />
        <Route path="/contact" element={<Suspense fallback={<div>Loading...</div>}><LazyContact /></Suspense>} />
        <Route path="/about" element={<Suspense fallback={<div>Loading...</div>}><LazyAbout /></Suspense>} />
        <Route path="/branch" element={<Suspense fallback={<div>Loading...</div>}><LazyBranch /></Suspense>} />
      </Routes>
    </AppContextProvider>
  </Router>
);

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);

reportWebVitals();

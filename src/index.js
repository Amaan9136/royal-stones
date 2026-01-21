import React, { Suspense, lazy, useEffect } from 'react';
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
import { RotateLoader } from 'react-spinners';
import { useLocation } from 'react-router-dom';
const LazyHome = lazy(() => import('./pages/Home'));
const LazyCart = lazy(() => import('./pages/Cart'));
const LazyContact = lazy(() => import('./pages/Contact'));
const LazyAbout = lazy(() => import('./pages/About'));
const LazyBranch = lazy(() => import('./pages/Branch'));
const LazyProducts = lazy(() => import('./pages/Products'));
const LazyGranites = lazy(() => import('./products/Granites'));
const LazyMarbles = lazy(() => import('./products/Marbles'));
const LazyItalianMarbles = lazy(() => import('./products/ItalianMarbles'));
const LazyOnyxStones = lazy(() => import('./products/OnyxStones'));
const LazySandStones = lazy(() => import('./products/SandStones'));
const LazyTiles = lazy(() => import('./products/Tiles'));
const LazyVietnamMarbles = lazy(() => import('./products/VietnamMarbles'));

const Loader = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}
  >
    <RotateLoader color="white" />
  </div>
);

const LayoutWithSearchBar = ({ children }) => (
  <MainLayout>
    <div className="p-2 sm:ml-64">
      <SearchBar>
        <Suspense fallback={<Loader color="white" />}>{children}</Suspense>
      </SearchBar>
    </div>
  </MainLayout>
);

const routes = [
  { path: "/", component: LazyHome },
  { path: "/cart", component: LazyCart },
  { path: "/contact", component: LazyContact },
  { path: "/about", component: LazyAbout },
  { path: "/branch", component: LazyBranch },
  { path: "/products", component: LazyProducts },
  { path: "/products/granites", component: LazyGranites },
  { path: "/products/marbles", component: LazyMarbles },
  { path: "/products/italian-marbles", component: LazyItalianMarbles },
  { path: "/products/onyx-stones", component: LazyOnyxStones },
  { path: "/products/sand-stones", component: LazySandStones },
  { path: "/products/tiles", component: LazyTiles },
  { path: "/products/vietnam-marbles", component: LazyVietnamMarbles },
];

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }, [pathname]);
  return null;
};

const Root = () => (
  <Router>
    <AppContextProvider>
      <ScrollToTop />
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              route.path.includes("/products/") ? (
                <LayoutWithSearchBar>
                  <route.component />
                </LayoutWithSearchBar>
              ) : (
                <Suspense fallback={<Loader color="white" />}>
                  <route.component />
                </Suspense>
              )
            }
          />
        ))}
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

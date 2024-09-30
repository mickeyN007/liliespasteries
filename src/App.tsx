import * as React from 'react';
import { Layout } from './components/base';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { 
  Home, Products,
} from './pages';
import NotFound from './components/NotFound/NotFound';
import { navLinks } from './constants/links';

function ScrollToTopOnNavigation() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <Layout
        topText='ORDER NOW FOR DELIVERY IN 24 HOURS!'
      >
        <ScrollToTopOnNavigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path="/products/:param"
            element={<Products />}
          />
          {navLinks.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
            />
          ))}
          {/* Route for 404 Not Found */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;


import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Landing from './pages/Landing';
import Discovery from './pages/Discovery';
import MapPage from './pages/MapPage';
import Match from './pages/Match';
import Navigation from './components/Navigation';
import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
  const location = useLocation();
  const showNav = location.pathname !== '/';

  return (
    <div className="min-h-screen bg-love-purple text-white font-sans overflow-hidden flex flex-col">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Landing />} />
          <Route path="/discovery" element={<Discovery />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/match" element={<Match />} />
        </Routes>
      </AnimatePresence>
      {showNav && <Navigation />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;

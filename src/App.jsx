import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css';


// Option 1: Using route config (recommended for many routes)
const routeConfig = [
  { path: '/', element: <Home />, title: 'Home' },
  { path: '/about', element: <About />, title: 'About Me' },
  { path: '/projects', element: <Projects />, title: 'Projects' },
  { path: '/contact', element: <Contact />, title: 'Contact' },
];

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <TitleUpdater />
        <Routes>
          {routeConfig.map((route) => (
            <Route 
              key={route.path} 
              path={route.path} 
              element={route.element} 
            />
          ))}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

// Separate component for title updating logic
function TitleUpdater() {
  const location = useLocation();
  
  useEffect(() => {
    const matchedRoute = routeConfig.find(route => 
      route.path === location.pathname
    );
    document.title = `My Portfolio | ${matchedRoute?.title || '404'}`;
  }, [location]);

  return null; // This component doesn't render anything
}

export default App;
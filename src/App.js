import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import './App.css';
import ImageSlider from './components/ImageSlider';
import Contact from './pages/contact/Contact';
import NotFoundPage from './pages/errors/NotFoundPage';
import Histoire from './pages/history/Histoire';
import HomePage from './pages/home/HomePage';
import Avisiter from './pages/visit/Avisiter';
import Navbar from './components/Navbar'
import "@sl-codeblaster/react-3d-animated-card";
import AnimatedCard from "@sl-codeblaster/react-3d-animated-card";
import Card from "react-animated-3d-card";


function App() {

  return (
      <div className="App">
        <main>
          <Navbar />
          <Routes>
            <Route path='/home' element={<HomePage />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/history' element={<Histoire />} />
            <Route path='/visit' element={<Avisiter />} />
            <Route path='/errors' element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
  );
}

export default App;

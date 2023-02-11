import { Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Contact from './pages/contact/Contact';
import NotFoundPage from './pages/errors/NotFoundPage';
import Histoire from './pages/history/Histoire';
import HomePage from './pages/home/HomePage';
import Avisiter from './pages/visit/Avisiter';



function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='' element={<HomePage />} />
        <Route path='contact' element={<Contact />} />
        <Route path='history' element={<Histoire />} />
        <Route path='visit' element={<Avisiter />} />
        <Route path='errors' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;

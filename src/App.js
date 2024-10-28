import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Cranes from './pages/Cranes'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/cranes" element={<Cranes/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

import './App.css';
import Navbar from './pages/shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Contact from './pages/shared/Contact';
import Login from './pages/Login/Login';
import Footer from './pages/shared/Footer';
import PageNotFound from './pages/PageNotFound/PageNotFound';


function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact/>} />
        <Route path="login" element={<Login/>} />
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;

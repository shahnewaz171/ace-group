import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import './App.css';
import Home from "./components/Home/Home";
import InsightsAll from './components/InsightsAll/InsightsAll';
import Footer from './components/shared/Footer/Footer';
import Navbar from './components/shared/Navbar/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="insights" element={<InsightsAll />} />
      </Routes>
      {/* Footer section */}
      <Footer />
    </Router>
  );
}

export default App;

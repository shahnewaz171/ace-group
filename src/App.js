import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import './App.css';
import CapitalManagement from './components/CapitalManagement/CapitalManagement';
import Contact from './components/Contact/Contact';
import Credit from './components/Credit/Credit';
import Corporate from './components/Discover/Corporate/Corporate';
import Holdings from './components/Holdings/Holdings';
import Home from "./components/Home/Home";
import InsightsAll from './components/InsightsAll/InsightsAll';
import InvestmentBank from './components/InvestmentBank/InvestmentBank';
import Leasing from './components/Leasing/Leasing';
import MoneyExchange from './components/MoneyExchange/MoneyExchange';
import PrivateEquity from './components/PrivateEquity/PrivateEquity';
import Footer from './components/shared/Footer/Footer';
import Navbar from './components/shared/Navbar/Navbar';

function App() {
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="insights" element={<InsightsAll />} />
        <Route path="contact" element={<Contact />} />
        <Route path="discovery" element={<Corporate />} />
        <Route path="services/investment-bank" element={<InvestmentBank />} />
        <Route path="services/holdings" element={<Holdings />} />
        <Route path="services/money-exchange" element={<MoneyExchange />} />
        <Route path="services/leasing" element={<Leasing />} />
        <Route path="services/credit" element={<Credit />} />
        <Route path="services/capital-management" element={<CapitalManagement />} />
        <Route path="services/private-equity" element={<PrivateEquity />} />
      </Routes>
      {/* Footer section */}
      <Footer />
    </Router>
  );
}

export default App;

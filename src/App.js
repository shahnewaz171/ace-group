import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import './App.css';
import { CapitalManagement, Credit, Holdings, InvestmentBank, Leasing, MoneyExchange, PrivateEquity } from './components/bankingFinance';
import Contact from './components/Contact/Contact';
import Corporate from './components/Discover/Corporate/Corporate';
import Home from "./components/Home/Home";
import InsightsAll from './components/InsightsAll/InsightsAll';
import { AcceleratorNetwork, Asiacyberx, Automobile, Corporation, PicturesEntertainment } from './components/otherServices';
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
        <Route path="services/corporation" element={<Corporation />} />
        <Route path="services/asiacyberx" element={<Asiacyberx />} />
        <Route path="services/accelerator-network" element={<AcceleratorNetwork />} />
        <Route path="services/automobile" element={<Automobile />} />
        <Route path="services/pictures-entertainment" element={<PicturesEntertainment />} />
      </Routes>
      {/* Footer section */}
      <Footer />
    </Router>
  );
}

export default App;

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.scss';

import Header from './components/Header/Header';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import Shop from './components/Shop/Shop';
import About from './components/About/About';
import Stock from './components/Shop/components/Stock/Stock';
import Novelty from './components/Shop/components/Novelty/Novelty';
import DeliveryInfo from './components/DeliveryInfo/DeliveryInfo';
import CardInfo from './components/Shop/components/CardInfo/CardInfo';
import Basket from './components/Basket/Basket';
import Favorites from './components/Favorites/Favorites';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/" element={<Shop />} />
            <Route path="/:courseId" element={<CardInfo />} />
            <Route path="/about" element={<About />}></Route>
            <Route path="/stock" element={<Stock />}></Route>
            <Route path="/novelty" element={<Novelty />}></Route>
            <Route path="/delivery-info" element={<DeliveryInfo />}></Route>
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;

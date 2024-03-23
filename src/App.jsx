import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.scss';
import { getProductsThunk } from './store/products/thunk';

import Header from './components/Header/Header';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import About from './components/About/About';
import DiscountedProducts from './components/DiscountedProducts/DiscountedProducts';
import Novelty from './components/Novelty/Novelty';
import DeliveryInfo from './components/DeliveryInfo/DeliveryInfo';
import CardInfo from './common/CardInfo/CardInfo';
import Basket from './components/Basket/Basket';
import Favorites from './components/Favorites/Favorites';
import Footer from './components/Footer/Footer';
import Order from './components/Order/Order';
import SearchList from './common/SearchList/SearchList';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsThunk());
  }, [dispatch]);

  return (
    <>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/masterok/registration" element={<Registration />} />
            <Route path="/masterok/login" element={<Login />} />
            <Route path="/masterok/basket" element={<Basket />} />
            <Route path="/masterok/order" element={<Order />} />
            <Route path="/masterok/favorites" element={<Favorites />} />
            <Route path="/masterok/" element={<Home />} />
            <Route path="/masterok/:courseId" element={<CardInfo />} />
            <Route path="/masterok/about" element={<About />}></Route>
            <Route
              path="/masterok/discounted-products"
              element={<DiscountedProducts />}
            ></Route>
            <Route path="/masterok/novelty" element={<Novelty />}></Route>
            <Route
              path="/masterok/delivery-info"
              element={<DeliveryInfo />}
            ></Route>
            <Route path="/masterok/search" element={<SearchList />}></Route>
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
};

export default App;

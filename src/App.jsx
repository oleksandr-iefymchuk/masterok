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
import Catalog from './components/Catalog/Catalog';
import Contacts from './components/Contacts/Contacts';

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
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            {/* <Route path="/catalog/:category" element={<Catalog />} /> */}
            <Route path="/catalog/:subcategory" element={<Catalog />} />
            <Route
              path="/catalog/:subcategory/:productId"
              element={<CardInfo />}
            />
            <Route path="/basket" element={<Basket />} />
            <Route path="/order" element={<Order />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/about" element={<About />}></Route>
            <Route path="/contacts" element={<Contacts />}></Route>
            <Route path="/delivery-info" element={<DeliveryInfo />}></Route>
            <Route path="/sale" element={<DiscountedProducts />}></Route>
            <Route path="/novelty" element={<Novelty />}></Route>

            <Route path="/search" element={<SearchList />}></Route>
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
};

export default App;

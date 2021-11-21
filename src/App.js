import { Routes, Route } from "react-router-dom";

import { ShopProvider } from './context/ShopContext'

import MainLayout from "./layouts/MainLayout";

import Home from './routes/Home/Home'
import Cart from './routes/Cart/Cart'
import Products from './routes/Products/Products'
import Checkout from './routes/Checkout/Checkout'

import './styles/App.style.scss'

function App() {
  return (
    <>
    <ShopProvider>
      <MainLayout>
        <Routes>
          <Route exact path='tau-e-commerce' element={<Home />} />
          <Route path='products' element={<Products />} />
          <Route path='cart' element={<Cart />} >
            {/* checkout */}
          </Route>
            <Route path='checkout' element={<Checkout />} />
        </Routes>
      </MainLayout>
    </ShopProvider>
    </>
  );
}

export default App;

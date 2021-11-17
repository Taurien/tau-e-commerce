import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from './routes/Home/Home'
import Cart from './routes/Cart/Cart'
import Products from './routes/Products/Products'

import './styles/App.style.scss'

function App() {
  return (
    <>
      <MainLayout>
        <Routes>
          <Route exact path='/tau-e-commerce' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;

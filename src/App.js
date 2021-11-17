import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from './routes/Home/Home'
import Cart from './routes/Cart/Cart'
import Products from './routes/Products/Products'

function App() {
  return (
    <div className="App">
      <MainLayout>
        <Routes>
          <Route exact path='/tau-e-commerce' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </MainLayout>
    </div>
  );
}

export default App;

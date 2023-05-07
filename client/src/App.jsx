import { Route, Routes } from 'react-router-dom';
import "./App.css";
import BrandCreate from "./components/create/brand-create";
import ProductCreate from "./components/create/product-create";
import BrandDetail from "./components/details/brand-detail";
import ProductDetail from './components/details/product-detail';
import Home from "./components/home/home";
import Navbar from "./components/navbar/navbar";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/products/:id' element={<ProductDetail />} />
        <Route exact path='/create/brands' element={<BrandCreate />} />
        <Route exact path='/create/products' element={<ProductCreate />} />
        <Route exact path='/brands/:id' element={<BrandDetail />} />
      </Routes>
    </div>
  );
};

export default App;

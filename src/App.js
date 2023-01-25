import {  Routes ,Route } from "react-router-dom";
import Navbar from'./Components/Navbar/Navbar';
import FloatingCart from './Components/FloatingCart/FloatingCart';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import ProductShowacase from './Pages/ProductShowcase/ProductShowcase';
import ShoppingCart from './Pages/ShopppingCart/ShoppingCart';
function App() {
  return (
  <>
      <Navbar />
    <FloatingCart />  
    <Routes>
        <Route path="/" element ={<Home/>} />
        <Route path="/produits" element={<Products/>} />
        <Route path="/produits/:id" element={<ProductShowacase />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shoppingCart" element={<ShoppingCart />} />
    </Routes>
  
    </>
 
  );
}

export default App;


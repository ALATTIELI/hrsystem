// src/Routes.tsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Stockorder from './pages/stockorder/stockorder';
import Borrowitems from './pages/borrowitems/borrowitems';
import Employeelogin from './pages/employeelogin/employeelogin';
import Warrantyitems from './pages/warrantyitems/warrantyitems';
import Product from './pages/stockorder/product';
import Devicemaintenance from './pages/devicemaintenance/devicemaintenance';
import Cart from './pages/stockorder/cart';
import ProfilePage from './pages/employeelogin/profilepage';
// Import other components for other pages if needed

function MainRoutes() {
  return (
    <Routes>
      {/* Add other routes for other pages if needed */}
      <Route path="/" element={<App />} />
      <Route path="/stockorder" element={<Stockorder />} />
      <Route path="/borrowitems" element={<Borrowitems />} />
      <Route path="/devicemaintenance" element={<Devicemaintenance />} />
      <Route path="/employeelogin" element={<Employeelogin />} />
      <Route path="/warrantyitems" element={<Warrantyitems />} />
      <Route path="/product/:id" element={<Product/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/employee/:id" element={<ProfilePage />} /> {/* Add this route */}
    </Routes>
  );
}

function AppRoutes() {
  return (
    <Router>
      <MainRoutes />
    </Router>
  );
}

export default AppRoutes;

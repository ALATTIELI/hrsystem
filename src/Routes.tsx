// src/Routes.tsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Stockorder from './pages/stockorder/stockorder';
import Borrowitems from './pages/borrowitems/borrowitems';
import Devicementainence from './pages/devicementainence/devicementainence';
import Employeelogin from './pages/employeelogin/employeelogin';
import Warrantyitems from './pages/warrantyitems/warrantyitems';
import Product from './pages/stockorder/product';
// Import other components for other pages if needed

function MainRoutes() {
  return (
    <Routes>
      {/* Add other routes for other pages if needed */}
      <Route path="/" element={<App />} />
      <Route path="/stockorder" element={<Stockorder />} />
      <Route path="/borrowitems" element={<Borrowitems />} />
      <Route path="/devicementainence" element={<Devicementainence />} />
      <Route path="/employeelogin" element={<Employeelogin />} />
      <Route path="/warrantyitems" element={<Warrantyitems />} />
      <Route path="/product/:id" element={<Product/>} />
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

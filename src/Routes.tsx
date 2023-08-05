// src/Routes.tsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Stockorder from './pages/stockorder/stockorder';
import Borrowitems from './pages/borrowitems/borrowitems';
import Devicementainence from './pages/devicementainence/devicementainence';
import Employeelogin from './pages/employeelogin/employeelogin';
import Warrantyitems from './pages/warrantyitems/warrantyitems';
// Import other components for other pages if needed

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/stockorder" element={<Stockorder />} />
      <Route path="/borrowitems" element={<Borrowitems />} />
      <Route path="/devicementainence" element={<Devicementainence />} />
      <Route path="/employeelogin" element={<Employeelogin />} />
      <Route path="/warrantyitems" element={<Warrantyitems />} />
      {/* Add other routes for other pages if needed */}
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

// src/Routes.tsx
import { FunctionComponent } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";
import App from "./App";
import Stockorder from "./pages/stockorder/stockorder";
import Borrowitems from "./pages/borrowitems/borrowitems";
import Employeelogin from "./pages/employeelogin/employeelogin";
import Warrantyitems from "./pages/warrantyitems/warrantyitems";
import Product from "./pages/stockorder/product";
import Devicemaintenance from "./pages/devicemaintenance/devicemaintenance";
import Cart from "./pages/stockorder/cart";
import ProfilePage from "./pages/employeelogin/profilepage";
import BranchLogin from "./pages/branchlogin/BranchLogin";
import { useDispatch, useSelector } from "react-redux";
import { clearSession } from "./redux/branchslice";
import { RootState } from "./redux/store";
// Import other components for other pages if needed

interface AppLayoutProps {
  logged: boolean;
}

const AppLayout: FunctionComponent<AppLayoutProps> = ({ logged }) => {
  return logged ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to={"/branchlogin"} />
  );
};

function MainRoutes() {
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const branch = useSelector((state: RootState) => state.branch);
  const logged = isSessionValid(branch.sessionStart); // Check if the session is valid

  function isSessionValid(sessionStart: number) {
    if (sessionStart === 0) return false;
    const oneWeekInMilliseconds = 7 * 24 * 60 * 60 * 1000; // 1 week in milliseconds
    const currentTime = Date.now();
    return currentTime - sessionStart <= oneWeekInMilliseconds;
  }

  if (!logged) {
    dispatch(clearSession());
  }

  return (
    <Routes>
      {/* Add other routes for other pages if needed */}
      <Route path="/branchlogin" element={<BranchLogin />} />
      <Route element={<AppLayout logged={logged} />}>
        <Route path="/" element={<App />} />
        <Route path="/stockorder" element={<Stockorder />} />
        <Route path="/borrowitems" element={<Borrowitems />} />
        <Route path="/devicemaintenance" element={<Devicemaintenance />} />
        <Route path="/employeelogin" element={<Employeelogin />} />
        <Route path="/warrantyitems" element={<Warrantyitems />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/employee/:id" element={<ProfilePage />} />{" "}
        {/* Add this route */}
      </Route>
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

import { Routes, Route } from "react-router-dom";
import NotFound from "../Pages/NotFound";
import PrivaRoute from "../Routes/PrivateRoute";
import LandingPage from "../Pages/LandingPage";
import Account from "../Pages/Account";
import FaqPage from "../Pages/FaqPage";
import EnterApp from "../Pages/EnterApp";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/account" element={<Account />} />
      <Route path="/faq" element={<FaqPage />} />
      <Route path="/portfolio" element={<EnterApp />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AllRoutes;

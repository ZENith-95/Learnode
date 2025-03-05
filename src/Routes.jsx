import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing_page/LandingPage";
import FindPeers from "./pages/FindPeers/FindPeers";
import Home from "./pages/Home/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/find-peers" element={<FindPeers />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
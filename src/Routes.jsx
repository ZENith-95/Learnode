import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { useState } from "react";
import LandingPage from "./pages/landing_page/LandingPage";
import FindPeers from "./pages/FindPeers/FindPeers";
import Home from "./pages/Home/Home";
import GroupsPage from "./pages/GroupsPage/GroupsPage";
import GroupPage from "./pages/GroupsPage/GroupPage";
import Resources from "./pages/Resources/Resources";

const AppRoutes = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/find-peers" element={<FindPeers />} />
      <Route path="/home" element={<Home />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/groups" element={<GroupsPage />} />
      <Route path="/" element={<Navigate to="/groups" replace />} />
      <Route path="/groups/:groupId" element={<GroupPage />} />
    </Routes>
  );
};

export default AppRoutes;

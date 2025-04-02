import {
  Routes,
  Route,
  useNavigate,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useState, useEffect } from "react";
import LandingPage from "./pages/landing_page/LandingPage";
import FindPeers from "./pages/FindPeers/FindPeers";
import Home from "./pages/Home/Home";
import GroupsPage from "./pages/GroupsPage/GroupsPage";
import GroupPage from "./pages/GroupsPage/GroupPage";
import Resources from "./pages/Resources/Resources";

// ScrollToTop component to reset scroll position on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Force scroll to top with both methods for maximum compatibility
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Also add a slight delay to ensure content is rendered
    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
};

const AppRoutes = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // This effect is unnecessary as ScrollToTop handles route changes
  // No need for beforeunload event

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/find-peers" element={<FindPeers />} />
        <Route path="/home" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/groups" element={<GroupsPage />} />
        <Route path="/groups/:groupId" element={<GroupPage />} />
      </Routes>
    </>
  );
};

export default AppRoutes;

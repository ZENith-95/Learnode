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
import { isLoggedIn } from "./utils/auth";

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

// Protected route component
const ProtectedRoute = ({ children }) => {
  const location = useLocation();

  if (!isLoggedIn()) {
    // Redirect to landing page if not logged in
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
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
        <Route
          path="/find-peers"
          element={
            <ProtectedRoute>
              <FindPeers />
            </ProtectedRoute>
          }
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/resources"
          element={
            <ProtectedRoute>
              <Resources />
            </ProtectedRoute>
          }
        />
        <Route
          path="/groups"
          element={
            <ProtectedRoute>
              <GroupsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/groups/:groupId"
          element={
            <ProtectedRoute>
              <GroupPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default AppRoutes;

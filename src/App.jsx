import { useState } from "react";
import Signing from "./pages/signing/Signing";
import ForgotPassword from "./pages/signing/ForgotPassword";
import Signup from "./pages/signing/Signup";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing_page/LandingPage";

function App() {
  return (
    <>
      <LandingPage />
      <Routes>
        <Route path="/signing" element={<Signing />}>
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

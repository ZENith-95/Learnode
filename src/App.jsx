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
        <Route path="/" element={<Signing />} />
        <Route path="/signing" element={<Signing />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/how-it-works" element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default App;

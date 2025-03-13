import { useState } from "react";
// import Signing from "./pages/signing/Signing";
import ForgotPassword from "./pages/signing/ForgotPassword";
import Signup from "./pages/signing/Signup";
import LandingPage from "./pages/landing_page/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FindPeers from "./pages/FindPeers/FindPeers";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/home" element={<Home />} />
        {/* <Route path="/signing" element={<Signing />} /> */}
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/find-peers" element={<FindPeers />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;

import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";
import HomePage from "./pages/HomePage";
import TvPage from "./pages/TvPage";
import MobilePage from "./pages/MobilePage";
import ComponentsPage from "./pages/ComponentsPage";
import QuizPage from "./pages/QuizPage";
import RegisterPage from "./pages/RegisterPage";
import CertificatePage from "./pages/CertificatePage";
import FeedbackPage from "./pages/FeedbackPage";
import ReferencesPage from "./pages/ReferencesPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const [openSettingsTrigger, setOpenSettingsTrigger] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/television" element={<TvPage />} />
        <Route path="/mobile" element={<MobilePage />} />
        <Route path="/components" element={<ComponentsPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/certificate" element={<CertificatePage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/references" element={<ReferencesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer onOpenCookieSettings={() => setOpenSettingsTrigger((v) => v + 1)} />
      <CookieBanner openSettingsTrigger={openSettingsTrigger} />
    </>
  );
}

export default App;

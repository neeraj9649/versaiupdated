import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navdetails from "./components/header_section/Navdetails";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "./components/header_section/Navbar";
import Header from "./components/Header";
import MobileAppDevelopment from "./components/MobileApplicationDevelopmet/MobileApplicationDevelopment";
import IOSAppDevelopment from "./components/IOSApplicationDevelopmet/IOSApplicationDevelopment";
import Seo from "./components/SearchEngineOptimization/SearchEngineOptimization";
import WebsiteDevelopment from "./components/WebsiteDevelopment/WebsiteDevelopment";
import SoftwareDevelopment from "./components/SoftwareDevelopment/SoftwareDevelopment";
import EcommerceSolutions from "./components/EcommerceWebsiteDevelopment/EcommerceWebsiteDevelopment";
import CustomDevelopment from "./components/CustomDevelopmentFeatures/CustomDevelopmentFeatures";
import AppStoreOptmization from "./components/AppStoreOptimization/AppStoreOptimization";
import Poster from "./components/PosterDesign/PosterDesign";
import Ads from "./components/SocilMediaAds/SocialMediaAds";
import Aboutus from "./components/Aboutus/aboutus";
import Footer from "./components/Footer";
import Contactus from "./components/ContactUs/ContactPage";
import Career from "./components/CareerPage/CareerPage";
import TermsAndConditions from "./components/footerpolicy/Terms&Conditions/Terms&Conditions";
import Refund from "./components/footerpolicy/Refund/Refund";
import FAQ from "./components/footerpolicy/FAQ/FAQ";
import PrivacyPolicy from "./components/footerpolicy/PrivacyPolicy/PrivacyPolicy";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        {" "}
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/About-us" element={<Aboutus />} />
          <Route path="/Search-Engine-Optimization" element={<Seo />} />
          <Route
            path="/App-Store-Optimization"
            element={<AppStoreOptmization />}
          />
          <Route path="/Poster-Design" element={<Poster />} />
          <Route path="/Ads" element={<Ads />} />
          <Route path="/Contact-us" element={<Contactus />} />
          <Route path="/Career" element={<Career />} />
          <Route path="/Term-and-condition" element={<TermsAndConditions />} />
          <Route path="/Refund" element={<Refund />} />
          <Route path="/Faqs" element={<FAQ />} />
          <Route path="/Privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/Website-Development" element={<WebsiteDevelopment />} />

          <Route
            path="/Mobile-Application-Development"
            element={<MobileAppDevelopment />}
          />
          <Route
            path="/IOS-Application-Development"
            element={<IOSAppDevelopment />}
          />
          <Route path="/Ecommerce-Solutions" element={<EcommerceSolutions />} />
          <Route
            path="/Software-Development"
            element={<SoftwareDevelopment />}
          />
          {/* <Route path="/IOSApplicationDevelopment" element={<IOSAppDevelopment />} /> */}
          <Route path="/Custom-Development" element={<CustomDevelopment />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

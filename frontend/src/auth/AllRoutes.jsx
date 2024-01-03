import { Route, Routes } from "react-router-dom";
import MainFrame from "../components/HomeFrame/MainFrame";
import HomePage from "../pages/HomePage/HomePage";
import AboutPage from "../pages/AboutPage/AboutPage";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import Productpage from "../pages/ProductPage/Productpage";
import HowItWorks from "../pages/HowItWorks/HowItWorks";
import ContactUs from "../pages/ContactUs/ContactUs";
import { Dashboard } from "../components/Dashboard/Dashboard";
import LoginPage from "../pages/LoginPage/LoginPage";
import FaqPage from "../pages/FaqPage/FaqPage";
import TermsConditions from "../pages/TermsConditions/TermsConditions";
import RefundPolicy from "../pages/RefundPolicy/RefundPolicy";
import ShippingDeliveryPolicy from "../pages/ShippingDeliveryPolicy/ShippingDeliveryPolicy";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainFrame />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="product" element={<Productpage />} />
        <Route path="howitworks" element={<HowItWorks />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="faqs" element={<FaqPage />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />

        <Route path="terms-conditions" element={<TermsConditions />} />
        <Route path="refund-policy" element={<RefundPolicy />} />
        <Route
          path="shipping-delivery-policy"
          element={<ShippingDeliveryPolicy />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Route>
      <Route path="dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default AllRoutes;

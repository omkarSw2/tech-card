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
        <Route path="*" element={<PageNotFound />} />
      </Route>
      <Route path="dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default AllRoutes;

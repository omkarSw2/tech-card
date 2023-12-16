import MainNavbar from "../Hedders/MainNavbar";
import MainFooter from "../Footer/MainFooter";
import { Outlet } from "react-router-dom";

const MainFrame = () => {
  return (
    <>
      <MainNavbar />
      <Outlet />
      <MainFooter />
    </>
  );
};

export default MainFrame;

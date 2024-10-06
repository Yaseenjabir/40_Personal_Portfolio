import React from "react";
import MobileHeader from "./MobileHeader/MobileHeader";
import DeskTopHeader from "./DesktopHeader/DeskTopHeader";

const Header: React.FC = () => {
  return (
    <>
      <MobileHeader />
      <DeskTopHeader />
    </>
  );
};
export default Header;

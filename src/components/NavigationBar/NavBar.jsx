import React from "react";
import Header from "./Header";
import MobileHeader from "./MobileHeader";
import { useMediaQuery } from "react-responsive";

function NavBar() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 900px)' })
  return <div>{isTabletOrMobile ? <MobileHeader /> : <Header />}</div>;
}

export default NavBar;

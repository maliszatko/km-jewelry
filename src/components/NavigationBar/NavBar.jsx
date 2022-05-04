import React from "react";
import Header from "./Header";
import MobileHeader from "./MobileHeader";
import { useMediaQuery } from "react-responsive";

function NavBar() {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  console.log(isMobile);
  return <div>{isMobile ? <MobileHeader /> : <Header />}</div>;
}

export default NavBar;

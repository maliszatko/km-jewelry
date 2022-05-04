import React from "react";
import HeaderButton from "./HeaderButton";
import Links from "./Links";
import { HeaderMenu } from "./StyledComponents";

function Header() {
  return (
    <HeaderMenu>
      <HeaderButton text="KM Jewelry" url="https://ze3c3u.csb.app/" />
      <Links styl="closed" />
    </HeaderMenu>
  );
}

export default Header;

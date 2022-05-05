import React from "react";
import HeaderButton from "./HeaderButton";
import Links from "./Links";
import { HeaderMenu } from "./StyledComponents";

function Header() {
  return (
    <HeaderMenu>
      <HeaderButton/>
      <Links styl="closed" />
    </HeaderMenu>
  );
}

export default Header;

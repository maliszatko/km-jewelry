import React, { useState } from "react";
import HeaderButton from "./HeaderButton";
import Links from "./Links";
import Hamburger from "hamburger-react";
import { HeaderMobile } from "./StyledComponents"

function MobileHeader() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <HeaderMobile>
          <div style={{margin: "auto auto auto 0", textAlign: "left"}}>
          <Hamburger size={30} toggled={isOpen} toggle={setOpen} />
          </div>
        <HeaderButton/>
      </HeaderMobile>
      {isOpen ? <Links styl="open" /> : null}
    </div>
  );
}

export default MobileHeader;

import React, { useState } from "react";
import HeaderButton from "./HeaderButton";
import Links from "./Links";
import Hamburger from "hamburger-react";

function MobileHeader() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <header id="menu-mobile">
        <div style={{ display: "flex", alignItems: "center" }}>
          <Hamburger size={20} toggled={isOpen} toggle={setOpen} />
        </div>
        <HeaderButton text="KM Jewelry" url="/" className="header-mobile" />
      </header>
      {isOpen ? <Links styl="open" /> : null}
    </div>
  );
}

export default MobileHeader;

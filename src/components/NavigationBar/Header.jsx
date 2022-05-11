import { React } from "react";
import HeaderButton from "./HeaderButton";
import Links from "./Links";
import { HeaderMenu } from "./StyledComponents";

function Header() {
    function onHomeButtonClick() {

    }
  return (
    <HeaderMenu>
      <HeaderButton onClick={onHomeButtonClick}/>
      <Links styl="closed" />
    </HeaderMenu>
  );
}

export default Header;

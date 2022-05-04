import React from "react";
import { HeaderBrand, Brand } from "./StyledComponents";

function HeaderButton(props) {
  console.log(props.url);
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <HeaderBrand>
        <Brand href={props.url}>{props.text}</Brand>
      </HeaderBrand>
    </div>
  );
}

export default HeaderButton;

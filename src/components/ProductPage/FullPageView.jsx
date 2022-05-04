import { React, useState } from "react";
import { FullPage, Image } from "./StyledComponents";
import CloseIcon from "@mui/icons-material/Close";

function FullPageView(props) {
  return (
    <FullPage onClick={props.onClick}>
      <Image
        style={{
          position: "absolute",
          top: "50%",
          transform: "translate(0, -50%)",
          zIndex: "100",
          width: "100%"
        }}
        src={props.src}
      />
      <CloseIcon
        style={{
          position: "absolute",
          right: "0%",
          color: "white",
          zIndex: "101"
        }}
      />
    </FullPage>
  );
}
export default FullPageView;

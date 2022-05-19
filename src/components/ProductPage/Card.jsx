import React from "react";
import { CardContainer, TextTitle, StyledLink } from "./StyledComponents";

function Card(props) {
  return (
    <StyledLink to={`/${props.pre}/${props.id}`}>
      <CardContainer>
        <img
          src={props.src}
          alt=""
          style={{ width: "95%", height: "80%", objectFit: "cover" }}
        />
          <div style={{height: "20%", display: "flex"}}><TextTitle>{props.name}</TextTitle></div>

      </CardContainer>
    </StyledLink>
  );
}

export default Card;

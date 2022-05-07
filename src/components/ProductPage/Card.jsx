import React from "react";
import { CardContainer, TextTitle, StyledLink } from "./StyledComponents";

function Card(props) {
  return (
    <StyledLink to={`/${props.pre}/${props.id}`}>
      <CardContainer>
        <img
          src={props.src}
          alt=""
          style={{ width: "95%", height: "85%", objectFit: "cover" }}
        />
        <TextTitle>{props.name}</TextTitle>
      </CardContainer>
    </StyledLink>
  );
}

export default Card;

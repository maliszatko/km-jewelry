import React, { useState } from "react";
import { NavMenu, NavOpenMenu, StyledLink, ClosedList, OpenList } from "./StyledComponents";

const links = [
  { name: "Kolczyki", route: "/kolczyki" },
  { name: "Naszyjniki", route: "/naszyjniki" },
  { name: "Pierścionki", route: "/pierscionki" }
];
function Anchor(props) {
  var textDecoration = { textDecoration: "none" };
  if (props.selected) {
    textDecoration = { textDecoration: "underline" };
  }
  return (
    <li className={props.styl}>
      <StyledLink to={props.route} onClick={props.func} style={textDecoration}>
        {props.text}
      </StyledLink>
    </li>
  );
}

function Links(props) {
  const [active, setActive] = useState("");
  let isSelected = "";

  function handleSelection(event) {
    setActive(event.target.innerHTML);
  }
  if (props.styl === "open") {
    return (
      <NavOpenMenu>
        <OpenList>
          {links.map((link, index) => {
            if (link.name === active) {
              isSelected = true;
            } else {
              isSelected = false;
            }
            return (
              <Anchor
                selected={isSelected}
                func={handleSelection}
                styl="open"
                text={link.name}
                key={index}
                route={link.route}
              />
            );
          })}
        </OpenList>
      </NavOpenMenu>
    );
  } else {
    return (
      <NavMenu>
        <ClosedList>
          {links.map((link, index) => {
            if (link.name === active) {
              isSelected = true;
            } else {
              isSelected = false;
            }
            return (
              <Anchor
                selected={isSelected}
                func={handleSelection}
                styl="closed"
                text={link.name}
                key={index}
                route={link.route}
              />
            );
          })}
        </ClosedList>
      </NavMenu>
    );
  }
}

export default Links;

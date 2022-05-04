import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  &:hover {
    color: #dddddd;
  }
  &:visited,
  &:link,
  &:active {
    color: black;
    text-decoration: none;
  }
`;

export const Button = styled.button`
  border: none;
  background-color: inherit;
  text-size: 1.25rem;
`;

export const Brand = styled.a`
  &:hover,
  &:visited,
  &:link,
  &:active {
    color: black;
    text-decoration: none;
  }
`;

export const HeaderBrand = styled(Button)`
  white-space: nowrap;
  overflow: hidden;
`;

export const HeaderMenu = styled.header`
  background-color: #ffeeee;
  padding: 32px 32px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  display: flex;
  text-align: left;
  justify-content: left;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  white-space: nowrap;
  position: relative;
  top: 0px;
  left: 10%;
  justify-content: center;
  margin: 0 10%;
}
`;
export const NavOpenMenu = styled.div`
  display: inline-block;
  width: 100vw;
  position: relative;
  text-align: center;
  justify-content: center;
  background-color: white;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  
}
`;

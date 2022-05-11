import styled from "styled-components";
import { Link } from "react-router-dom";

export const ClosedList = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 0 10%;
`
export const OpenList = styled.ul`
    position: relative;
    display: block;
    justify-content: flex-end;
    text-align: center;
    padding: 0;
    width: 100vw;
`
export const HeaderMobile = styled.header`
  padding: 0 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  display: flex;
  text-align: center;
  justify-content: center;
`

export const StyledLink = styled(Link)`
  @media screen and (max-width: 900px) {
    font-size: 1.0rem;
  }
  @media screen and (min-width: 900px) {
    font-size: 1.25rem;
  }
  &:visited,
  &:link,
  &:active {
    color: black;
    text-decoration: none;
  }
  &:hover {
    color: #dddddd;
  }
`;

export const Button = styled.button`
  border: none;
  background-color: inherit;
  font-size: 1.25rem;
`;

export const Brand = styled(Link)`
  &:hover,
  &:visited,
  &:link,
  &:active {
    color: black;
    text-decoration: none;
  }
`;

export const HeaderBrand = styled(Button)`
  
`;

export const HeaderMenu = styled.header`
  @media screen and (max-width: 900px) {
    padding: 32px 32px;
  }
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  display: flex;
  text-align: left;
  justify-content: left;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  white-space: nowrap;
  position: relative;
  top: 0;
  left: 0;
  justify-content: center;
  margin-left: 10%;
`;
export const NavOpenMenu = styled.div`
  display: inline-block;
  width: fit-content;
  position: relative;
  text-align: center;
  justify-content: center;
  background-color: white;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
`;
export const HeaderImg = styled.img.attrs({
    src: "https://firebasestorage.googleapis.com/v0/b/km-jewelry.appspot.com/o/images%2Flogo.png?alt=media&token=ac871c0d-b131-4327-aa5d-31afdd6255a9"
})`
  height: 10vh ;
`;
export const ClosedListItem = styled.li`
  list-style-type: none;
  margin: 0 6%;
  padding: 0 6%;
  display: inline-block;
  line-height: 20px;
`
export const OpenListItem = styled.li`
  list-style-type: none;
  margin: 5% 0;
  display: flex;
  text-align: center;
  justify-content: center;
  line-height: 20px;
`
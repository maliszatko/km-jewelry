import styled from "styled-components";
import { Link } from "react-router-dom";

export const ClosedList = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0 auto;
`
export const OpenList = styled.ul`
    position: relative;
    display: block;
    justify-content: center;
    text-align: center;
`
export const HeaderMobile = styled.header`
  padding: 0 32px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  display: flex;
  text-align: center;
  justify-content: center;
`

export const StyledLink = styled(Link)`
  @media screen and (max-width: 992px) {
    font-size: 2.0rem;
  }
  @media screen and (min-width: 992px) {
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
  @media screen and (max-width: 992px) {
    font-size: 2.5rem ;
  }
  @media screen and (min-width: 992px) {
    font-size: 2.0rem ;
  }
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
  @media screen and (max-width: 992px) {
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
  width: 100vw;
  white-space: nowrap;
  position: relative;
  top: 0;
  left: 10%;
  justify-content: center;
  margin: 0 10%;
`;
export const NavOpenMenu = styled.div`
  display: inline-block;
  width: 100vw;
  position: relative;
  text-align: center;
  justify-content: center;
  background-color: white;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
`;
export const HeaderImg = styled.img.attrs({
    src: "https://firebasestorage.googleapis.com/v0/b/km-jewelry.appspot.com/o/images%2Flogo.png?alt=media&token=ac871c0d-b131-4327-aa5d-31afdd6255a9"
})`
  @media screen and (max-width: 992px) {
    height: 10vh ;
  }
  @media screen and (min-width: 992px) {
    height: 12vh ;
  }
`;
export const ClosedListItem = styled.li`
  list-style-type: none;
  margin: 0 20%;
  display: inline-block;
  line-height: 20px;
`
export const OpenListItem = styled.li`
  list-style-type: none;
  margin: 5% auto;
  display: flex;
  text-align: center;
  justify-content: center;
  line-height: 50px;
`
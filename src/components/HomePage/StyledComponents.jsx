import styled from "styled-components";
import {Link} from "react-router-dom";

export const StyledLink = styled(Link)`
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
export const Hero = styled.div`
  position: relative;
`;

export const HeroText = styled.h1`
  color: white;
  @media screen and (max-width: 992px) {
    font-size: 1.0rem;
  }
  @media screen and (min-width: 992px) {
    font-size: 1.75rem;
  }
`;

export const HeroContent = styled.div`
  overflow: hidden;
  text-align: center;
  display: block;
  position: absolute;
`;

export const Button = styled.button`
  border: none;
  background-color: white;
  
  @media screen and (max-width: 992px) {
    font-size: 0.8rem;
  }
  @media screen and (min-width: 992px) {
    font-size: 1.0rem;
  }
  color: black;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  //text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px grey;
  transition: ease background-color 250ms;
  &:hover {
    background-color: #696969;
    color: white;
  }
  &:disabled {
    cursor: default;
    opacity: 0.3;
    box-shadow: 0px 1px 1px lightgray;
  }
`;
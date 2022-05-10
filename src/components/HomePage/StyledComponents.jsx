import styled from "styled-components";
import {Link} from "react-router-dom";

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
export const Hero = styled.div`
  position: relative;
`;

export const HeroText = styled.h1`
  color: white;
  font-size: 1.75rem;
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
    font-size: 1.5rem;
  }
  @media screen and (min-width: 992px) {
    font-size: 1.0rem;
  }
  color: black;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
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
export const AboutWrapper = styled.div`
  @media screen and (max-width: 992px) {
    margin: 5% auto;
    width: 90%;
    border-radius: 5px;
    border: 2px solid #696969;
    display: flex;
    height: auto;
    padding: 3% 2%;
    align-items: center;
  }
  @media screen and (min-width: 992px) {
    margin: 3% auto;
    width: 60%;
    border-radius: 5px;
    border: 2px solid #696969;
    display: flex;
    height: auto;
    padding: 3% 2%;
    align-items: center;
  }
`
export const TextField = styled.div`
  @media screen and (max-width: 992px) {
    width: 50%;
    margin: 0 auto; 
    vertical-align: top; 
    overflow-wrap: break-word;
    display: inline;
    float: right;
    text-align: center;
  }
  @media screen and (min-width: 992px) {
    width: 50%;
    margin: 0 auto;
    vertical-align: top;
    overflow-wrap: break-word;
    display: inline;
    float: right;
    text-align: center;
  }
`

export const Image = styled.img`
  @media screen and (max-width: 992px) {
    width: 45%;
    display: inline;
  }
  @media screen and (min-width: 992px) {
    width: 45%;
    display: inline;
  }
`
import styled from "styled-components";
import { Link } from "react-router-dom";

export const FullPage = styled.div`
  position: fixed;
  padding: 0;
  margin: 0;
  z-index: 1;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  background: black;
  opacity: 1;
`;

export const Image = styled.img`
  width: 90%;
`;

export const SmallImage = styled.img`
  justify-content: left;
  width: 100%;
`;

export const Title = styled.h1`
  @media screen and (max-width: 992px) {
    font-size: 3.5rem;
  }
  @media screen and (min-width: 992px) {
    font-size: 2.0rem;
  }
  font-family: "Unna", serif;
  text-align: center;
`;

export const TitleProduct = styled.h1`
  @media screen and (max-width: 992px) {
    font-size: 3.75rem;
    text-align: center;
  }
  @media screen and (min-width: 992px) {
    font-size: 2.5rem;
    text-align: left;
  }
  font-family: "Unna", serif;
`;

export const CardContainer = styled.div`
  text-align: center;
  align-items: center;
  width: 50%;
  height: 400px;
  margin: 10% auto 0 auto;
  display: block;
  place-items: center;
  padding: 1rem;
  position: relative;
  background: #fff;
  background-clip: padding-box;
  border: solid 8px transparent;
  border-radius: 0.8rem;
  &:hover {
    transition: transform 0.2s; /* Animation */
    position: relative;
    z-index: 999;
    transform: scale(1.5);
  }
`;

export const TextTitle = styled.h2`
  font-size: 0.9rem;
  width: 50vw;
  margin: 1% auto;
  overflow-wrap: normal;
  @media screen and (max-width: 992px) {
    font-size: 2.25rem;
  }
  @media screen and (min-width: 992px) {
    font-size: 1.5rem;
  }
`;

export const PagesButtons = styled.div`
  margin-top: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageButton = styled.button`
  border: none;
  width: 11%;
  background-color: inherit;
  &:hover {
    opacity: 0.8;
  }
  cursor: pointer;
  margin: 1% 1%;
`;

export const PageButton = styled.button`
  @media screen and (max-width: 992px) {
    font-size: 2.0rem;
  }
  @media screen and (min-width: 992px) {
    font-size: 1.5rem;
  }
  border: none;
  background-color: inherit;
  color: black;
  padding: 2% 3%;
  border-radius: 5px;
  outline: 0;
  margin: 10px 0;
  cursor: pointer;
  box-shadow: 0 2px 2px grey;
  transition: ease background-color 250ms;
  &:hover {
    background-color: black;
    color: white;
  }
  &:disabled {
    cursor: default;
    opacity: 0.3;
    box-shadow: 0 1px 1px lightgray;
  }
`;

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

export const LargeImageButton = styled.button`
  border: none;
  background-color: inherit;
  font-size: 1.25rem;
  cursor: pointer;
`;

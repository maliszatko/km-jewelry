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
  font-size: 2.5rem;
  font-family: "Unna", serif;
  text-align: center;
`;

export const TitleProduct = styled.h1`
  font-size: 2.5rem;
  font-family: "Unna", serif;
  text-align: left;
`;

export const CardContainer = styled.div`
  text-align: center;
  align-items: center;
  width: 300px;
  height: 400px;
  margin: 10% auto 0 auto;
  display: block;
  place-items: center;
  border: 2px solid;
  padding: 1rem;
  position: relative;
  background: #fff;

  /*The background extends to the outside edge of the padding. No background is drawn beneath the border.*/
  background-clip: padding-box;

  border: solid 8px transparent;
  border-radius: 0.8rem;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -2px;
    border-radius: inherit; /* inherit container box's radius */
    background: linear-gradient(to left, #a67b00, #d3ae36);
  }
  &:hover {
    /* opacity: 0.8; */
    transition: transform 0.2s; /* Animation */
    position: relative;
    z-index: 999;
    transform: scale(1.5);
  }
`;

export const TextTitle = styled.h2`
  font-size: 0.9rem;
  text-transform: uppercase;
  width: 200px;
  margin: 3% auto;
  overflow-wrap: break-word;
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
  border: none;
  background-color: inherit;
  text-size: 1.25rem;
  background-color: ;
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
    background-color: black;
    color: white;
  }
  &:disabled {
    cursor: default;
    opacity: 0.3;
    box-shadow: 0px 1px 1px lightgray;
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
  text-size: 1.25rem;
  background-color: ;
  cursor: pointer;
`;

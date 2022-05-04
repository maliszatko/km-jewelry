import styled from "styled-components";

export const Hero = styled.div`
  position: relative;
`;

export const HeroText = styled.h1`
  color: white;
  text-size: 1.75rem;
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

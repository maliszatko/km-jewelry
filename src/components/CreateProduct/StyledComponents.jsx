import styled from "styled-components";

export const Form = styled.form`
  margin: 5% auto;
  text-align: center;
  display: block;
`

export const Button = styled.button`
  font-size: 1.25rem;
  border: none;
  background-color: inherit;
  color: black;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
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
  @media screen and (max-width: 992px) {
    //font-size: 2.0rem;
    margin: 10% 1%;
  }
  @media screen and (min-width: 992px) {
    //font-size: 1.25rem;
    margin: 5% 0;
  }
`


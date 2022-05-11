import styled from 'styled-components'

export const Wrapper = styled.div`
  @media screen and (max-width: 992px) {
    margin: 20% auto;
  }
  @media screen and (min-width: 992px) {
    margin: 5% auto;
  }
  text-align: center;
`
export const SuccessMessage = styled.h1`
  color: #CCA43D;
  font-size: 2.75rem;
  //@media screen and (max-width: 992px) {
  //  font-size: 6.0rem;
  //}
  //@media screen and (min-width: 992px) {
  //  font-size: 2.75rem;
  //}
`

export const Buttons = styled.div`
  align-items: center;
  @media screen and (max-width: 992px) {
    margin: 0 auto;
  }
  @media screen and (min-width: 992px) {
    margin: 0 auto;
    display: inline;
  }
`

export const Button = styled.button`
  font-size: 1.25rem;
  margin: 3% 5%;
  font-family: "Montserrat",sans-serif;
  width: fit-content;
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
    //margin: 10% 10%;
    //font-size: 2.75rem;
  }
  @media screen and (min-width: 992px) {
    //margin: 3% 5%;
    //font-size: 1.25rem;
  }
`
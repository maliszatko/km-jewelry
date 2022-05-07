import styled from 'styled-components'

export const WebLink = styled.a`
  font-size: 1.5rem;
  margin: 0 5%;
  &:visited,
  &:link,
  &:active {
    color: black;
    text-decoration: none;
  }
  &:hover{
    color: grey;
  }
`

export const StyledFooter = styled.footer`
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  align-items: center;
  width: 100vw;
  white-space: nowrap;
  justify-content: center;
  margin: 5% auto 0 auto;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
`

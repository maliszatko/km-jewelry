import styled from 'styled-components'

export const TextField = styled.div`
  width: 90%;
  margin: 0 auto;
  @media screen and (max-width: 900px) {
    text-align: center;
  }
  @media screen and (min-width: 900px) {
    text-align: left;
  }
`

export const Image = styled.img`
  width: 90%;
`
export const TextTitle = styled.h1`
  margin: 5% auto 5% auto;
  font-weight: 200;
  @media screen and (max-width: 900px) {
    font-size: 1.75rem;
    text-align: center;
  }
  @media screen and (min-width: 900px) and (max-width: 2000px){
    font-size: 2.25rem;
    text-align: left;
  }
  @media screen and (min-width: 2000px) {
    font-size: 2.5rem;
    text-align: left;
  }
`
export const TextContent = styled.h4`
  font-weight: 200;
  color: black;
  opacity: 0.8;
  margin: 0 auto;
  @media screen and (max-width: 900px) {
    font-size: 0.9rem;
    margin-bottom: 20px;
  }
  @media screen and (min-width: 900px) and (max-width: 2000px){
    font-size: 1.25rem;
  }
  @media screen and (min-width: 2000px) {
    font-size: 1.75rem;
  }
`
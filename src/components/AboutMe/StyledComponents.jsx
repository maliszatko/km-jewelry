import styled from 'styled-components'

export const AboutWrapper = styled.div`
  border-radius: 5px;
  border: 2px solid #696969;
  display: flex;
  height: auto;
  padding: 3% 2%;
  align-items: center;
  @media screen and (max-width: 900px) {
    margin: 5% auto;
    width: 90%;
  }
  @media screen and (min-width: 900px) {
    margin: 3% auto;
    width: 75%;
  }
`
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
  margin: 0 auto 5% auto;
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
  margin: 0 auto;
  @media screen and (max-width: 900px) {
    font-size: 1.0rem;
    margin: 0 auto 50px auto;
  }
  @media screen and (min-width: 900px) and (max-width: 2000px){
    font-size: 1.25rem;
    margin: 0 auto;
  }
  @media screen and (min-width: 2000px) {
    font-size: 1.75rem;
    margin: 0 auto;
  }
`
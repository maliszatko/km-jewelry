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
  width: 50%;
  margin: 0 auto; 
  vertical-align: top; 
  overflow-wrap: break-word;
  display: inline;
  float: right;
  text-align: center;
`

export const Image = styled.img`
  width: 45%;
  display: inline;
`
export const TextTitle = styled.h1`
  margin: 0 auto 10% auto; 
  display: block;
  text-align: center;
  @media screen and (max-width: 900px) {
    font-size: 1.75rem;
  }
  @media screen and (min-width: 900px) and (max-width: 2000px){
    font-size: 2.25rem;
  }
  @media screen and (min-width: 2000px) {
    font-size: 2.5rem;
  }
`
export const TextContent = styled.h4`
    display: inline;
  @media screen and (max-width: 900px) {
    font-size: 1.0rem;
  }
  @media screen and (min-width: 900px) and (max-width: 2000px){
    font-size: 1.25rem;
  }
  @media screen and (min-width: 2000px) {
    font-size: 1.75rem;
  }
`
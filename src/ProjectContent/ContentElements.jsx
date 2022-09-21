import styled from "styled-components";

export const ContentHeader = styled.div`
  width: 100%;
  height: 500px;
  background: #101522;
`
export const ContentContainer = styled.div`
  max-width: 800px;
  margin: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Back = styled.a`
  margin-top: 4rem !important;
  color: #fff;
  font-size: 0.9rem;
`
export const ContentTitle = styled.h1`
  width: 90%;
  font-size: 2.6rem;
  color: #fff;
  text-align: center;
  margin: 1rem;
`
export const Img = styled.img`
  width: 100%;
  height: 420px;
  object-fit: cover;
  object-position: center;
`
export const ContentDescWrapper = styled(ContentContainer)`
   ${ContentContainer};
   margin-top: 10rem !important;
`
export const ContentSubTitle = styled.h2`
    font-size: 1.2rem;
    color: #101522;
    margin-top: 4rem;
`
export const ContentDescription = styled.p`
  font-size: 1rem;
  line-height: 1.7rem;
  margin: 2rem 0;
  text-align: justify;
  color: #101522;
`

export const Main = styled.div`
  width: 100%;
  min-height: 440px;
  background: #101522;
  display: grid;
  justify-content: center;
  align-items: center;
`
export const SearchBox = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
`
export const SearchInput = styled.input`
  display: block;
  width: 500px;
  padding: 15px;
  background: none;
  border: none;
  outline: none;
  border-radius: 10px;

  background-color: #fff;
  color: #101522;
`
export const InfoWrapper = styled.div`
justify-content: center;
align-items: center;
width: 100%;
`
export const Location = styled.div`
  font-size: 4rem;
  color: #fff;
`
export const DateToday = styled.div`
  font-size: 2rem;
  color: #fff;
`
export const Temp = styled.div`
  font-size: 2rem;
  color: #fff;
`
export const WeatherType = styled.div`
  color: #fff;
  font-size: 2rem;

`
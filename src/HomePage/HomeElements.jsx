import styled from "styled-components";

export const HomeSection = styled.div`
  width: 100%;
  min-height: 440px;
  background: #101522;
  display: grid;
  justify-content: center;
  align-items: center;
`
export const TextContainer = styled.div`
    color: #fff;
    text-align: center;

    @media screen and (max-width: 1068px) {
        width: 100%;
    }
`
export const SectionTitle = styled.h2`
    font-size: 3.5rem;
`

//Card Container
export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, auto));
  justify-content: center;
  gap: 1.5rem;   
  
`
export const ContentBox = styled.div`
  background: #fff;
  box-shadow: 0 4px 14px hsl(355deg 25% 15% / 10%);
  padding: 15px;
  border-radius: 0.5rem;
`
export const Img = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: center;
  border-radius: 0.5rem;
`
export const ProjectName = styled.h2`
  font-size: 0.9rem;
  font-weight: 500;
  text-transform: uppercase;
  color: #fd8f44;
`
export const CardTitle = styled.a`
  font-size: 1.3rem;
  font-weight: 600;
  color: #101522;
  text-decoration: none;
  cursor: pointer;
  /* To remain title in 2 lines */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

`
export const ProjectDescription = styled.p`
  color: #101522;
  font-size: 0.9rem;
  line-height: 1.5rem;
  margin: 5px 0 10px;
  /* To remain text content in 3 lines */
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`
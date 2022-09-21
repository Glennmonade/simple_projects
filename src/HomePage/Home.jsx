import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { CardContainer, ContentBox, HomeSection, SectionTitle, TextContainer, Img, ProjectName, CardTitle, ProjectDescription } from './HomeElements'

const Home = ({
    sectionTitle,
    img1, project1, quizGame, quizDesc,
    img2, project2, calculator, calcuDesc,
    img3, project3, weather, weatherDesc,

}) => {

  return (
    <div>
        <Navbar/>
        <HomeSection>
            <TextContainer>
                <SectionTitle>{sectionTitle}</SectionTitle>
            </TextContainer>
        </HomeSection>

        <CardContainer>
            <ContentBox>
                <Img src={img1}/>
                <ProjectName>{project1}</ProjectName>
                <CardTitle href="/quiz-content">{quizGame}</CardTitle>
                <ProjectDescription>{quizDesc}</ProjectDescription>
            </ContentBox>

            <ContentBox>
                <Img src={img2}/>
                <ProjectName>{project2}</ProjectName>
                <CardTitle href="/project-preview">{calculator}</CardTitle>
                <ProjectDescription>{calcuDesc}</ProjectDescription>
            </ContentBox>

            <ContentBox>
                <Img src={img3}/>
                <ProjectName>{project3}</ProjectName>
                <CardTitle href="weather-content">{weather}</CardTitle>
                <ProjectDescription>{weatherDesc}</ProjectDescription>
            </ContentBox>

            <ContentBox>
                <Img src={img2}/>
                <ProjectName>{project2}</ProjectName>
                <CardTitle href="/project-preview">{calculator}</CardTitle>
                <ProjectDescription>{calcuDesc}</ProjectDescription>
            </ContentBox>

            
        </CardContainer>

    
    </div>
  )
}

export default Home
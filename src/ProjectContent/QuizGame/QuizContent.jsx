import React from 'react'
import { ContentContainer, ContentHeader, Back, ContentTitle, Img } from '../ContentElements'

const QuizContent = ({
    contentTitle, img
}) => {
  return (
    <div>
        <ContentHeader>
            <ContentContainer>
                <Back href='/'>Back</Back>
                <ContentTitle>{contentTitle}</ContentTitle>
                <Img src={img}/>
            </ContentContainer>
        </ContentHeader>
    </div>
  )
}

export default QuizContent
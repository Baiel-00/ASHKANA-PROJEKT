
import React from 'react'
import styled from 'styled-components'

function Main() {
    return (
        <div>
         <TextMain>KYRGYZ <span>ASHKANASY</span> - оазис восточной культуры, где гости испытывают 
            уникаьное путешествие через<br /> изумитетельные вкусы, аутентичную эстетику и <br /> безупречное гостеприимство.
            </TextMain>
            <Text>
               Самое большое разнообразие <span>Кыргызких блюд</span><br /> приготовленных лучшими шеф-поварами!
            </Text>
            <DivButton>
                <SpanButton><span>Забронировать столик ⟶</span></SpanButton>
                <span>Меню  ⟶</span>
            </DivButton>
        </div>
    )
}

export default Main

const TextMain = styled.p`
    font-family: Pirata One;
    font-size: 35px;
    font-weight: 400;
    line-height: 44.97px;
    text-align: center;
    color: #FFFFFF;
    width: 950px;
    height: 200px;
    margin: auto;
    margin-top: 120px;
    margin-left: 230px;
    span{
        font-family: Pirata One;
        font-size: 35px;
        font-weight: 400;
        line-height: 44.97px;
        text-align: center;
        color: #FF9900;
    }
`
const Text = styled.p`
    font-family: Montserrat;
    font-size: 18px;
    font-weight: 400;
    line-height: 21.94px;
    text-align: center;
    color: #FFFFFF;
    width: 950px;
    margin: auto;
    margin-top: 30px;
    margin-left: 220px;
    span{
        color: #FF9900;
    }
`
const SpanButton = styled.div`
    width: 280px;
    height: 30px;
    border-radius: 60px 0px 0px 60px;
    display: inline-block;
    background-color: #FF9900;
    
`
const DivButton = styled.div`
    width: 400px;
    height: 30px;
    border-radius: 60px;
    color: white;
    border: 1px solid #FF9900;
    margin: auto;
    margin-top: 60px;
    margin-left: 500px;
    span{
        margin-left: 20px;
    }
`
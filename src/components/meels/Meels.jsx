
import React from 'react'
import MeelsItem from './MeelsItem'
import test from "../../assets/images/becraund.png"
import image1 from "../../assets/images/image 1.png"
import image2 from "../../assets/images/image 2.png"
import image3 from "../../assets/images/image 3.png"
import image4 from "../../assets/images/image 4.png"
import image5 from "../../assets/images/image 5.png"
import styled from 'styled-components'
const meels = [
    {
        img: image1,
        title: "Курдак",
        price: 400,
        description: "кыргыз элинин эң сыйлуу тамактарынын бири.",
        id: 1
    },
    {
        img: image2,
        title: "Бешбармак",
        price: 800,
        description: "майда тууралган эттен жасалган кыргыздын эң сый тамагы.",
        id: 2
    },
    {
        img: image3,
        title: "Чучук",
        price: 750,
        description: "жылкынын эти, казы-карта,  татымдар кошулуп жасалган  азык.",
        id: 3
    },
    {
        img: image4,
        title: "Быжы",
        price: 630,
        description: "койдун боорун эзип, ага майда тууралган пияз, сарымсак менен бышырылган чүйгүн тамак.",
        id: 4
    },
    {
        img: image5,
        title: "Aш",
        price: 400,
        description: "койдун боорун эзип, ага майда тууралган пияз, сарымсак менен бышырылган чүйгүн тамак.",
        id: 5
    },

]

export default function Meels() {
    return (
        <MeelstStyle>
            <Image src={test} alt="" />
            <NashiBlydy>НАШИ БЛЮДЫ</NashiBlydy>
            <ItemWrapper>
                {
                    meels.map((el) => (
                        <MeelsItem key={el.id} img={el.img} title={el.title} price={el.price} description={el.description} id={el.id}/>
                    ))
                }
            </ItemWrapper>
        </MeelstStyle>
    )
}

const MeelstStyle = styled.div`
    position: relative;
    margin-top: 225px;
    color: #FFFFFF;

`

const Image = styled.img`
    width: 100%;
`

const ItemWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
    justify-content: center;
    position: absolute;
    top: 150px;
    z-index: 2;
    margin-left: -10px;
`
const NashiBlydy = styled.h1`
    display: flex;
    position: absolute;
    top: 80px;
    z-index: 2;
    margin-left: 44%;
`
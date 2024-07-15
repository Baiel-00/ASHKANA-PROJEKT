
import { useEffect, useState } from "react"
import styled from "styled-components"

const KounterMenu = (props) => {
    const [number, setNumbe] = useState(1)

    useEffect(()=>{
        props.onGetQuantity(number)
    },[number])

    const koshy = () => {
        setNumbe(number + 1 )
    }
    const kemity = () => {
        setNumbe(number - 1 )
    }

    return (
        <KounterDiv>
            <span onClick={koshy}>+</span>
            <span>|</span>
            <span>{number}</span>
            <span>|</span>
            <span onClick={kemity}>-</span>
        </KounterDiv>
    )
}
export default KounterMenu

const KounterDiv = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 150px;
    text-align: center;
    margin: auto;
    margin-top: 10px ;
    cursor: pointer;
`
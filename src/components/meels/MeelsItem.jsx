
import React, { useContext, useState } from 'react'
import KounterMenu from './KounterMenu'
import Buttoon from '../../UI/Button'
import styled from 'styled-components'
import { MeelsContext } from '../../store'

function MeelsItem(props) {
  const contextButton = useContext(MeelsContext)
  const [quantity, setQuantity] = useState(1)
  const [price, setPrice] = useState(props.price)
  const [state, setState] = useState(true)

  const getQuantity = (num) => {
    setQuantity(num)
  }
  const clickHandler = ()=>{
    const obj = {
      ...props,
      price: price,
      quantity
    }
    contextButton.plus(quantity)
    contextButton.product(obj)
  }

  const radioHandler = (el) => {
    setPrice(props.price)
    setState(true)
  }
  const radioHandler2 = (el) => {
    const pros = props.price * 20 / 100
    setPrice(props.price - pros)
    setState(false)
  }

  return (
      <DivMenu>
          <Image src={props.img} alt="" />
          <h1>{props.title}</h1>
          <p>{props.description}</p>
          <InputDiv>
          <input type="radio" checked={state} name={props.id.toString()} onChange={radioHandler}/>
          <span>1 п</span>
          <input type="radio" onChange={radioHandler2} name={props.id.toString()} />
          <span>0,7 п</span>
          </InputDiv>
          <KounterMenu onGetQuantity={getQuantity}/>
          <Buttoon onClick = {clickHandler}>{price}</Buttoon>
      </DivMenu>
  )
}

export default MeelsItem

const DivMenu = styled.div`
margin: 50px 0px 0px 50px;
  width: 260px;
  height: 300px;
  margin-left: 80px;
  margin-top: 100px;
  /* top: 1224px; */
  border-radius: 20px;
  text-align: center;
  background: radial-gradient(100% 100% at 0% 0%, 
  rgba(99, 99, 99, 0.58) 0%, 
  rgba(99, 99, 99, 0.58) 100%);
  position: relative;
`
const Image = styled.img`
  width: 150px;
  height: 110px;
  position: absolute;
  left: 58px;
  top: -90px;
`

const InputDiv = styled.div`
  display: flex;
    justify-content: space-around;
    width: 200px;
    margin: auto;
`
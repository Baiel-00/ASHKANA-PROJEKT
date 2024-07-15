
import React, { useContext } from 'react'
import BasketItem from './BasketItem'
import { MeelsContext } from '../../store'
import Button from '../../UI/Button'

function Basket(props) {
  const context = useContext(MeelsContext)
  const TotalAmount = context.basket.reduce((prev, el)=>{
    console.log(el);
    return prev + +el.summa 
  },0)
  return (
    <div>
      { !context.basket.length && <h1>ЗАКАЗ 0</h1>}
      {
        context.basket.map((el)=>(
          <BasketItem key={el.id} title = {el.title} price = {el.price} summa={el.summa} quantity = {el.quantity} id={el.id}/>
        ))
      }
        <h1 style={{color: "#FF9900"}}>Total Amount: {TotalAmount}</h1>
        <hr/>
        <div>
          {context.basket.length >0 ? <Button>Добавить</Button> :null }
          <Button onClick = {props.onClick}>Удалить</Button>
        </div>
    </div>
  )
}

export default Basket
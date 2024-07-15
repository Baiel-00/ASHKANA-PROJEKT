
import React from 'react'
import styled from 'styled-components'
import BasketKaunter from './BasketKaunter'

function BasketItem(props) {
  return (
    <DivModal>
        <h2>{props.title}</h2>
        <p><b>summa:</b> {props.summa || props.price}</p>
        <BasketKaunter>{props}</BasketKaunter>
    </DivModal>
  )
}

export default BasketItem

const DivModal = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #FF9900;
    margin: 10px;
    color: #FFFFFF;
    border-radius: 10px;
    padding: 0px 20px;
`
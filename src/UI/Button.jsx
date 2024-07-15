import React from 'react'
import styled from 'styled-components'

function Button(props) {
  return (
    <ButtonStyle onClick={props.onClick}>{props.children}</ButtonStyle>
  )
}

export default Button

const ButtonStyle = styled.button`
    width: 80px;
    height: 30px;
    border-radius: 60px;
    background: #FF9900;
    color: #FFFFFF;
    border: none;
    margin-top: 15px;
    cursor: pointer;
    &:active{
      cursor: pointer;
      background: #b16e08;
    }
`
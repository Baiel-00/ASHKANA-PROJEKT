
import React, { Fragment } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'

function Modal(props) {
  return (
    <Fragment>
        <div>
            {
            createPortal(
                <FonStyle>
                     <ModalStyle>
                         {props.children}
                     </ModalStyle>
                </FonStyle>,
                document.body
            )
            }
        </div>
    </Fragment>
  )
}

export default Modal

const ModalStyle = styled.div`
width: 600px;
padding: 10px;
background-color: white;
text-align: center;
border-radius: 10px;
border: none;
margin: auto;
box-shadow: 
rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, 
rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`

const FonStyle = styled.div`
    background-color: #00000086;
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
`
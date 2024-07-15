
import React from 'react'
import test from "../../assets/images/test.png"
import styled from 'styled-components'
import Header from './Header'
import Main from '../Main'

function ProductContayner() {
  return (
    <ProductStyle>
        <Header/>
        <Main/>
        <Image src={test} alt="" />
    </ProductStyle>
  )
}

export default ProductContayner

const ProductStyle = styled.div`
  width: 1220px;


`

const Image = styled.img`
    width: 100%;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
`
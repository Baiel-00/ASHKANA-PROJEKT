
import React, { useContext, useState } from 'react'
import test from "../../assets/iconca/logo.png"
import test2 from "../../assets/iconca/Vector.png"
import styled from 'styled-components'
import { MeelsContext } from '../../store'
import Modal from '../../UI/Modal'
import Basket from '../basket/Basket'


function Header() {
    const context = useContext(MeelsContext)
    const [modal, setModal] = useState(false)

    const showModal = () => {
        setModal(true)
    }
    const closeModal = () => {
        setModal(false)
    }
  return (
    <DivGlobal>
           { modal && <Modal closeModal = {closeModal}>
            <Basket onClick = {closeModal}/>
        </Modal> }
        <img src={test} alt="" />
        <Navigator>
            <li>Главная</li>
            <li>О нас</li>
            <li>Отзывы</li>
            <li>Контакты</li>
            <li>Заказать</li>
        </Navigator>
        <DivIconca>
            <ImgIconca onClick={showModal} src={test2} alt="" />
            <h2>{context.counter}</h2>
        </DivIconca>
    </DivGlobal>
  )
}

export default Header

const DivGlobal = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    margin-top: 20px;
    margin-left: 100px;
`

const DivIconca = styled.div`
    background-color: #808080d8;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    text-align: center;

    h2{
        color: white;
    }
`

const Navigator = styled.ul`
    color: white;
    display: flex;
    justify-content: space-around;
    width: 500px;
    list-style: none;
`

const ImgIconca = styled.img`
    margin-top: 7px;
    cursor: pointer;
`

import { useContext, useState } from "react"
import styled from "styled-components";
import { MeelsContext } from "../../store";
import Modal from "../../UI/Modal";
import Button from "../../UI/Button";

const BasketKaunter = ({...props}) => {
    const context = useContext(MeelsContext)
    const [modal, setModal]= useState(false)

    const showModal = ()=>{
        setModal(true)
    }
    const closeModal = ()=>{
        setModal(false)
        context.deleteItem()
    }
    const closModal = () =>{
        setModal(false)
    }

    const koshy = () => {
        context.plusBasket(props.children.id)
    }
    const kemity = () => {
        context.minusBasket(props.children.id, props.children.quantity)
        if (props.children.quantity === 1) {
            showModal()
        }
    }
    console.log(props);

    return (
        <BasketKaunterDiv>
            { modal && <Modal>
                <h1>хотите удалить заказ ?</h1>
                <Button onClick = {closeModal}>да</Button>
                <Button onClick = {closModal}>нет</Button>
            </Modal>}
            <ButKaunter onClick={koshy}>+</ButKaunter>
            <span>{props.children.quantity}</span>
            <ButKaunter onClick={kemity}>-</ButKaunter> 
        </BasketKaunterDiv>
    )
}
export default BasketKaunter

const BasketKaunterDiv = styled.div`
    width: 90px;
    height: -20px;
    display: flex;
    justify-content: space-between;
`
const ButKaunter = styled.span`
    width: 20px;
    height: 25px;
    border-radius: 9px;
    color: #FF9900;
    background-color: white;
    cursor: pointer; 

    &:active{
        background-color: #dad7d7;
    }
`
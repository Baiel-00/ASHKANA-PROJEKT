import { createContext, useState } from "react";

export const MeelsContext = createContext()

export const WrapperMeels = (props) => {
    const [counter, setCounter] = useState(0)
    const [basket, setBasket] = useState([])
    const [idBsket, setIdBasket] = useState()

    const plus = (quantity) => {
        setCounter(counter + quantity)
    }

    const product = (data) => {
        console.log(data);
        const find = basket.find((el)=> el.id === data.id)
        if (!find) {
            setBasket((prev)=>[...prev, {...data, summa: data.price*data.quantity, }])
        }else{
            basket.map((el)=>{
                console.log(el);
                if (el.id === data.id) {
                    if(320===data.price){
                        el.quantity = el.quantity + data.quantity
                        el.summa = el.summa + data.price``
                        return
                    }
                    el.quantity = el.quantity + data.quantity
                    el.summa = el.quantity * data.price
                }
                // return el
            })
            // setBasket(test)
        }
    }

    const plusBasket=(id)=>{
        const newData = basket.map((el)=>{
            if(el.id===id){
                el.quantity = el.quantity + 1
                el.summa = el.price  * el.quantity
                return el
            }
            return el
        })
        setBasket(newData)
    }
    const minusBasket=(id, quantity)=>{
        setIdBasket(id)
        const newData = basket.map((el)=>{
            if(el.id===id && quantity > 1){
                el.quantity = el.quantity - 1
                el.summa = el.price  * el.quantity
                return el
            }
            return el
        })
        setBasket(newData)
    }

    const deleteItem = () => {
        const del = basket.filter((el)=>el.id!==idBsket)
            setBasket(del)
            return
    }


    const value = {
        counter,
        plus,
        product,
        basket,
        plusBasket,
        minusBasket,
        deleteItem
    }
    return <MeelsContext.Provider value={value}>{props.children}</MeelsContext.Provider>
}
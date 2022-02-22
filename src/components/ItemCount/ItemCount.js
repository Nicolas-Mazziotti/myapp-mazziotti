import React from "react"
const ItemCount = ({stock, initial, addItem, item, qty}) => {
        
        const [counter, setCounter] = React.useState(initial)
        const incrementar = () => {
            if(counter< stock){
            setCounter(counter + 1)
        }
            
        }
        const decrementar = () => {
            if (counter> initial)
            setCounter(counter - 1)
        }





        return (
            <div>
                <p>Cantidad = {counter}</p>
                <button className="btn btn-secondary me-2" onClick={incrementar}>+</button>
                <button className="btn btn-secondary" onClick={decrementar}>-</button>
                <button className="btn btn-secondary" onClick={()=>addItem(counter, item, qty)}>Agregar al Carrito</button>
            </div>
        )
    }


    export default ItemCount
import React, {useContext} from "react"

const ItemCount = ({stock, initial, item, qty}) => {
        
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
        const addItem = () => {
            alert ("Agregado")
        }





        return (
            <div>
                <p>Cantidad = {counter}</p>
                <button className="btn btn-secondary me-2" onClick={incrementar}>+</button>
                <button className="btn btn-secondary" onClick={decrementar}>-</button>
                <button className="btn btn-secondary" onClick={addItem}>Agregar al Carrito</button>
            </div>
        )
    }


    export default ItemCount
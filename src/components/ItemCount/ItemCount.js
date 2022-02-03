import React from "react"
const ItemCount = () => {
        
        const [counter, setCounter] = React.useState(0)
        const incrementar = () => {
            setCounter(counter + 1)
        }
        const decrementar = () => {
            setCounter(counter - 1)
        }





        return (
            <div>
                <p>{counter}</p>
                <button className="btn btn-secondary me-2" onClick={incrementar}>+</button>
                <button className="btn btn-secondary" onClick={decrementar}>-</button>
            </div>
        )
    }


    export default ItemCount
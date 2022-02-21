import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const CartWidget = ({handleClick}) => {
    return (
        <div>
           <button onClick={handleClick} className='btn btn-dark'><AddShoppingCartIcon/></button> 
        </div>
    )

}

export default CartWidget
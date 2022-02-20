
const Carrito = () => {
    return (
<table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Modelo</th>
      <th scope="col">Precio</th>
      <th scope="col">Imagen</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
  </tbody>
  <div className="carrito-footer d-flex m-2">
  <p className="m-2">Total USD: </p>
  <span className="m-2"> 0 </span>
  <button className="btn btn-dark">Finalizar Compra</button>
  </div>
</table>
    
    )
}
export default Carrito
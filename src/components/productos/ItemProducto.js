import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import Swal from 'sweetalert2'

const ItemProducto = (props) => {
  const eliminarProducto = () => {
    //preguntamos si realmente quiere borrar el producto
    console.log(props.producto.id)
    Swal.fire({
      title: '¿Esta seguro de eliminar el producto?',
      text: "No se puede recuperar un producto eliminado",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Borrar',
      cancelButtonText: 'Cancelar'
    }).then(async (result) => {
      if (result.isConfirmed) {
        // pedir a la api borrar un producto
        try {
          const URL = process.env.REACT_APP_API_URL + '/' + props.producto.id
          const respuesta = await fetch(URL, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json"
            }
          });
          if (respuesta.status === 200) {
            // si la api borro el producto, muestro el mmsj
            Swal.fire(
              'Producto eliminado',
              'El producto fue correctamente eliminado',
              'success'
            );
            
            //llamar a consultarApi
            props.consultarApi();
          }
        } catch (error) {
          console.log(error)
        }

      }
    })
  }

  return (
    <ListGroup.Item className="d-flex justify-content-between">
      <p>
        {props.producto.nombreProducto}
        <span className="fw-bolder">- Precio: $ {props.producto.precioProducto}</span>
      </p>
      <div>
        <Button variant="warning">Editar</Button>
        <Button variant="danger" onClick={() => eliminarProducto()}>Borrar</Button>
      </div>
    </ListGroup.Item>
  );
};

export default ItemProducto;

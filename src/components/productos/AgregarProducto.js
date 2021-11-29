import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { campoRequerido, rangoPrecio } from "../helpers/helpers"
import Swal from 'sweetalert2'

const AgregarProducto = () => {
  const [nombreProducto, setNombreProducto] = useState('');
  const [precioProducto, setPrecioProducto] = useState(0);
  const [categoria, setCategoria] = useState('');
  const [error, setError] = useState(false);
  const URL = process.env.REACT_APP_API_URL;

  const handleSubmit = async(e) => {
    e.preventDefault();

    // validar todos los input
    if (campoRequerido(nombreProducto) &&
      rangoPrecio(precioProducto) &&
      campoRequerido(categoria)
    ) {
      setError(false);
      // crear un objeto, usamos notación literal que tiene la siguiente forma
      //nombreProducto: nombreProducto, pero si llega a tener el mismo nombre usamos notacion implicita que es como lo dejamos ahora.
      const productoNuevo = {
        nombreProducto,
        precioProducto,
        categoria
      }

      // enviar el objeto producto a la api POST
      try{
        const parametros = {
          method: "POST",
          headers:{
            "Content-Type":"application/json"//content-type es para decirle que el tipo de dato que viaja es applocation/json (formato json)
          },
          body: JSON.stringify(productoNuevo)
        }
        const respuesta = await fetch(URL,parametros)

        if(respuesta.status === 201){
          // mostrar al usuario un mensaje de operacion exitosa
          Swal.fire(
            'Producto creado',
            'El producto fue correctamente cargado',
            'success'
          )
          //console.log(e.target) lo usamos para ver si el evento "e" es del formulario, y asi usar el reset
          // resetear el formulario
          e.target.reset();

          // redireccionar
          

        }else {
          // mostrar un cartel de problema en la api

        }


      }catch(error){
        console.log(error);
      }
    } else {
      // si falla la validacion de los input, mostrar un mensaje al usuario
      setError(true);
    }
  }

  return (
    <Container>
      <h1 className="display-3 text-center my-4">Nuevo Producto</h1>
      <hr />
      <Form className="my-5" onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre del producto*</Form.Label>
          <Form.Control type="text" placeholder="Ej: café" onChange={(e) => setNombreProducto(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Precio*</Form.Label>
          <Form.Control type="number" placeholder="ej: 50" onChange={(e) => setPrecioProducto(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Categoria*</Form.Label>
          <Form.Select onChange={(e) => setCategoria(e.target.value)}>
            <option value=''>Seleccione una opcion</option>
            <option value='bebida-caliente'>Bebida Caliente</option>
            <option value='bebida-fria'>Bebida Fria</option>
            <option value='sandwich'>Sandwich</option>
            <option value='dulce'>Dulce</option>
            <option value='salado'>Salado</option>
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">
          Guardar
        </Button>
      </Form>
      {error === true ? (
        <Alert variant='danger' className='mb-5'>
          Debe completar todos los campos y el precio de los productos tiene que estar entre $1 y $5000
        </Alert>
      ) : null}
    </Container>
  );
};

export default AgregarProducto;

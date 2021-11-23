import React, {useState} from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import {campoRequerido, rangoPrecio} from "../helpers/helpers"

const AgregarProducto = () => {
  const [nombreProducto, setNombreProducto] = useState('');
  const [precioProducto, setPrecioProducto] = useState(0);
  const [categoria, setCategoria] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // validar todos los input

    // crear un objeto

    // enviar el objeto producto a la api

    // si falla la validacion de los input, mostrar un mensaje al usuario
  }

  return (
    <Container>
      <h1 className="display-3 text-center my-4">Nuevo Producto</h1>
      <hr />
      <Form className="my-5" onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre del producto*</Form.Label>
          <Form.Control type="text" placeholder="Ej: café" onChange={(e)=>setNombreProducto(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Precio*</Form.Label>
          <Form.Control type="number" placeholder="ej: 50" onChange={(e)=>setPrecioProducto(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Categoria*</Form.Label>
          <Form.Select onChange={(e)=>setCategoria(e.target.value)}>
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
    </Container>
  );
};

export default AgregarProducto;

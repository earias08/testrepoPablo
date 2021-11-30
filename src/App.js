
import './App.css';
import Navigation from './components/common/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/common/Footer';
import Error404 from './components/pages/Error404';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Inicio from './components/pages/Inicio';
import ListaProductos from './components/productos/ListaProductos';
import AgregarProducto from './components/productos/AgregarProducto';
import EditarProducto from './components/productos/EditarProducto';
import {useState, useEffect} from 'react';

function App() {
  // declarar variables
  const [productos, setProductos] = useState([]);
  const URL = process.env.REACT_APP_API_URL; //process es un objeto de node para leer el env
  
  useEffect(() => {
    consultarApi();
  },[]);

  const consultarApi = async() => {
    try{
      // codigo que ejecuto normalmente, peticion GET
      const respuesta = await fetch(URL);
      const datos = await respuesta.json();
      // console.log(respuesta);
      // console.log(datos);
      setProductos(datos);
    } catch(error){
      console.log(error);
    }
  }

  return (
    <Router>
      <Navigation/>
      <Routes>
        <Route exact path='/' element={<Inicio></Inicio>}></Route>
        <Route exact path='/productos' element={<ListaProductos productos={productos} consultarApi={consultarApi}></ListaProductos>}></Route>
        <Route exact path='/productos/nuevo' element={<AgregarProducto consultarApi={consultarApi}></AgregarProducto>}></Route>
        <Route exact path='/productos/editar/:id' element={<EditarProducto></EditarProducto>}></Route>
        <Route exact path='*' element={<Error404></Error404>}></Route> 
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;

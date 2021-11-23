
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

function App() {
  return (
    <Router>
      <Navigation/>
      <Routes>
        <Route exact path='/' element={<Inicio></Inicio>}></Route>
        <Route exact path='/productos' element={<ListaProductos></ListaProductos>}></Route>
        <Route exact path='/productos/nuevo' element={<AgregarProducto></AgregarProducto>}></Route>
        <Route exact path='/productos/editar' element={<EditarProducto></EditarProducto>}></Route>
        <Route exact path='*' element={<Error404></Error404>}></Route> 
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;

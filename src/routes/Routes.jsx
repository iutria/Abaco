import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from '../views/login/Login';
import Home from '../views/home/Home';
import Parametros from '../views/parametros/Parametros'
import Configuracion from '../views/configuracion/Configuracion'
import Facturas from '../views/facturas/Facturas'
import Creelo from "../views/creelo/Creelo";
function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Login /> } />
        <Route path='/home' element={ <Home /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/facturas' element={ <Facturas /> } />
        <Route path='/creer' element={ <Creelo /> } />
        <Route path='/configuracion' element={ <Configuracion /> } />
        {/* aqui va una rta con parametros */}
        <Route path='/configuracion/:id' element={ <Parametros /> } />
        <Route path='*' element={ <div>404</div> } />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp

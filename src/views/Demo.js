import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import {Link} from 'react-router-dom'


const Demo = () => {
    //accedemos a la store
  const {store} =useContext(Context)
  return (
    <div className="container-fluid">
    <h1 className="text-center"></h1>
      <br />
      <Link to="/" className="btn btn-primary">Ir a Inicio</Link>
    </div>
  );
}
 
export default Demo;
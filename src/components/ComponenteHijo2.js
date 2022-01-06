import React, { useContext } from 'react';
import {Context} from '../store/appContext'

const ComponenteHijo2 = () => {
      //esto ahora se destructura como actions
    const { color2, setColor2 } = useContext(Context)

    return (
        <div className="row px-5 py-3 mx-5 mb-2" style={{ background: color2 }}>
        <div className="col-lg-6">
            <h3 style={{color: 'white'}}>{color2}</h3>
        </div>
        <div className="col-lg-6">
        {/* accedemos al objeto actions y al metodo changeColor */}
        <button onClick={() => setColor2('Blue')} className="btn btn-primary">Azul</button>
        <button onClick={() => setColor2('Red')} className="btn btn-danger m-4">Rojo</button>
        </div>
    </div>
    )
}

export default ComponenteHijo2
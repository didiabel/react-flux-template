import React, { useContext, useEffect } from 'react';
import {Context} from '../store/appContext'

const ComponenteHijo1 = () => {
    //esto ahora se destructura como actions
    const { color1, setColor1 } = useContext(Context)
    return (
        
        <div className="row px-5 py-3 mx-5 mb-2" style={{ background: color1 }}>
            <div className="col-lg-6">
                <h3 style={{color: 'lightblue'}}>{color1}</h3>
            </div>
            <div className="col-lg-6">
              {/* accedemos al objeto actions y al metodo changeColor */}
            <button onClick={() => setColor1('Yellow')}  className="btn btn-warning">Amarillo</button>
            <button onClick={() => setColor1('Green')}  className="btn btn-success m-4">Verde</button>
            </div>
        </div>
    )
}

export default ComponenteHijo1
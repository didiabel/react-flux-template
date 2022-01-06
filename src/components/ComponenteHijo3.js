import React, { useContext } from 'react';
import {Context} from '../store/appContext'

const ComponenteHijo3 = () => {
      //esto ahora se destructura como actions
    const { color3, setColor3 } = useContext(Context)

    return (
        <div className="row px-5 py-3 mx-5 mb-2" style={{ background: color3 }}>
            <div className="col-lg-6">
                <h3 style={{color: 'pink'}}>{color3}</h3>
            </div>
            <div className="col-lg-6">
            {/* accedemos al objeto actions y al metodo changeColor */}
            <button onClick={() => setColor3('Black')} className="btn btn-dark">Negro</button>
            <button onClick={() => setColor3('Grey')} className="btn btn-secondary m-4">Gris</button>
            </div>
        </div>
    )
}

export default ComponenteHijo3
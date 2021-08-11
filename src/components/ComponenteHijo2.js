import React, { useContext } from 'react';
import {Context} from '../store/appContext'

const ComponenteHijo2 = () => {
      //esto ahora se destructura como actions
    const { actions } = useContext(Context)

    return (
        <div className="row px-5 py-3 mx-5 mb-2" style={{ background: "#4caf50" }}>
        <div className="col-lg-6">
            <h3>Componente 2</h3>
        </div>
        <div className="col-lg-6">
        {/* accedemos al objeto actions y al metodo changeColor */}
        <button style={{ background: "#28632a" }} onClick={() => actions.changeColor('Verde')} className="btn">Cambiar</button>
        </div>
    </div>
    )
}

export default ComponenteHijo2
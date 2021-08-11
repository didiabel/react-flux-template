import React, { useContext } from 'react';
import {Context} from '../store/appContext'

const ComponenteHijo1 = () => {
    //esto ahora se destructura como actions
    const { actions } = useContext(Context)

    return (
        <div className="row px-5 py-3 mx-5 mb-2" style={{ background: "#f99595" }}>
            <div className="col-lg-6">
                <h3>Componente 1</h3>
            </div>
            <div className="col-lg-6">
              {/* accedemos al objeto actions y al metodo changeColor */}
            <button style={{ background: "#ff5d5d" }} onClick={() => actions.changeColor('Rosa')} className="btn">Cambiar</button>
            </div>
        </div>
    )
}

export default ComponenteHijo1
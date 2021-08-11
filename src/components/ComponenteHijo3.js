import React, { useContext } from 'react';
import {Context} from '../store/appContext'

const ComponenteHijo3 = () => {
      //esto ahora se destructura como actions
    const { actions } = useContext(Context)

    return (
        <div className="row px-5 py-3 mx-5 mb-2" style={{ background: "#03a9f4" }}>
            <div className="col-lg-6">
                <h3>Componente 3</h3>
            </div>
            <div className="col-lg-6">
            {/* accedemos al objeto actions y al metodo changeColor */}
            <button style={{ background: "#1368ab" }} onClick={() => actions.changeColor('Azul')} className="btn btn-primary">Cambiar</button>
            </div>
        </div>
    )
}

export default ComponenteHijo3
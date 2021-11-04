import React, { useRef } from 'react'


const VistaReproductor = ({anterior, repropausa, siguiente, listaCanciones,directo, audioRef}) => {
    return (
        <>

<h2 className="text-center">Reproductor</h2>
                        <button className="btn btn-primary" onClick={anterior}>Anterior</button>
                        <button className="btn btn-success" onClick={repropausa}>Reproducir/Pausa</button>
                        <button className="btn btn-primary" onClick={siguiente}>Siguiente</button>

                        <ul className="list-group">
                            <audio ref={audioRef} />
                            {
                                listaCanciones.map((item, index) => (
                                    <li key={index} className="list-group-item">
                                        <a href="#"  onClick={() => directo(index)} >{item.name}</a>
                                    </li>
                                ))
                            }

                        </ul>

        </>
    )
}

export default VistaReproductor




const VistaReproductor = ({anterior, repropausa, siguiente, listaCanciones,directo, audioRef}) => {
    return (
        <>

<h2 className="text-center mb-4 text-info">Reproductor de Música</h2>
                        <div className="mb-3">
                            <button className="btn btn-primary mx-2" onClick={anterior}>Anterior</button>
                            <button className="btn btn-success mx-2" onClick={repropausa}>Reproducir/Pausa</button>
                            <button className="btn btn-primary mx-2" onClick={siguiente}>Siguiente</button>
                        </div>

                        <ul className="list-group">
                            <audio ref={audioRef} />
                            {
                                listaCanciones.map((item, index) => (
                                    <li key={index} className="list-group-item">
                                        <a href="/#"  onClick={() => directo(index)} >{item.name}</a>
                                    </li>
                                ))
                            }

                        </ul>

        </>
    )
}

export default VistaReproductor

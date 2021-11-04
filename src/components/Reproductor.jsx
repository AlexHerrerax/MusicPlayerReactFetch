import React, { useEffect, useRef, useState } from 'react'
import VistaReproductor from './VistaReproductor';
import './style.css'


const Reproductor = () => {

    const [listaCanciones, setListaCanciones] = useState([])
    const [reproduciendo, setReproduciendo] = useState(false)
    const [cancionActual, setCancionActual] = useState();

    let audioRef = useRef()

    const getCanciones = async () => {

        try {

            const resp = await fetch("https://assets.breatheco.de/apis/sound/songs");
            const data = await resp.json();
            console.log(data);
            setListaCanciones(data)

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getCanciones();
    }, [])


    const directo = (index) => {

        audioRef.current.src = `https://assets.breatheco.de/apis/sound/${listaCanciones[index].url}`;
        audioRef.current.play();
        
        setReproduciendo(true);
        setCancionActual(index)
    }

    const repropausa = () => {
        if (reproduciendo === true) {
            audioRef.current.pause()
            setReproduciendo(false)
        } else {
            audioRef.current.play();
            setReproduciendo(true)
        }
    }

    const siguiente = () => {
        const cancionSiguiente = listaCanciones[cancionActual+1]
        console.log(cancionSiguiente);
        audioRef.current.src= `https://assets.breatheco.de/apis/sound/${cancionSiguiente.url}`;
        audioRef.current.play();
        setCancionActual(cancionActual+1)
    }

    const anterior = () => {
        const cancionAnterior = listaCanciones[cancionActual-1]
        console.log(cancionAnterior);
        audioRef.current.src= `https://assets.breatheco.de/apis/sound/${cancionAnterior.url}`;
        audioRef.current.play();
        setCancionActual(cancionActual-1)
    }

    return (

        <>

            <div className="container ">
                <div className="row justify-content-center ">
                    <div className="col-7 text-center bg-dark">
                        
                    <VistaReproductor
                    anterior={anterior}
                    repropausa={repropausa} 
                    siguiente ={siguiente}
                    audioRef={audioRef}
                    listaCanciones={listaCanciones}
                    directo={directo}

                    />
                    </div>
                </div>
            </div>


        </>
    )
}

export default Reproductor

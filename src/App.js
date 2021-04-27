import canciones from './components/canciones'
import './App.css';

import { useEffect, useRef, useState } from 'react';

function App() {

const [canciones, setCanciones] = useState(null);

const getCanciones = () =>{
  
  fetch("https://assets.breatheco.de/apis/sound/songs")

.then(function(response){   //Respuesta del servidor
    return response.json()
}) 

.then(function (valor){ //Proceso informacion
console.log(valor)

setCanciones(valor)

 })

.catch(function(error){
    console.log(error)
})
  
}

useEffect(() =>{getCanciones()   }, [])





  const [indexCancion, setIndexCancion] = useState(0);
  const [reproduciendo, setReproduciendo] = useState(0);

  let playRef = useRef(null);

  const tocar = (index) => {
    setReproduciendo(0)
    const musica = canciones[index];
    playRef.src = `https://assets.breatheco.de/apis/sound/${musica.url}`;
    setIndexCancion(index)
    }

  function reproducir() {
    console.log(reproduciendo);
    if (reproduciendo === 0) {
      setReproduciendo(1);
      playRef.play();
         } else {
      setReproduciendo(0)
      playRef.pause();
    }}

  function atras() {
    setReproduciendo(0)
        if (indexCancion === 0) {
      tocar(indexCancion)
    } else {
      let cancionAtras = indexCancion - 1;
      tocar(cancionAtras)
    }}

  function siguiente() {
    setReproduciendo(0)
        if (indexCancion === canciones.length - 1) {     
      tocar(indexCancion)
    } else {
      let cancionSiguiente = indexCancion + 1;
      tocar(cancionSiguiente);
    }}
    

  return (
    <>
<div className="container bor">
        <div className="row d-flex justify-content-center m-5">
          <div className="col-12 center-blocks ">
            <div className="list-group">
              <audio ref={t => playRef = t} />
              {canciones !== null &&
                canciones.map((item, index) => {
                  return <a href="#" key={index} className="list-group-item list-group-item-action bg-dark text-white" onClick={() => tocar(index)}>{item.id}- {item.name} </a>
                })}
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center m-5">
          <div className="col-12  d-flex justify-content-center bg-dark">
            <button type="button" className="btn btn-dark ml-5" onClick={atras} > Atras </button>
            <button type="button" className="btn btn-dark ml-5" onClick={reproducir} > Reproducir/Pausa </button>
            <button type="button" className="btn btn-dark ml-5" onClick={siguiente} > Siguiente </button>
          </div>
        </div>
      </div>
    </>
  );}
export default App;

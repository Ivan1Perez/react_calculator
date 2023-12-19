import './App.css';
import logo from './img/textoImagenCalculadora.png';
import Tecla from './components/Tecla';
import Pantalla from './components/Pantalla';
import TeclaClear from './components/TeclaClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = val =>{
    setInput(input + val);
  }

  const calcularResultado = () =>{
    if (input) {
      setInput(evaluate(input));
    } else {
      alert('No hay operadores.');
    }
  }

  return(
    <div className='App'>
      <div className='logo-contenedor'>
        <img
          src={logo}
          className='logo'
          alt='logo'
        />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Tecla gestionClic={agregarInput}>1</Tecla>
          <Tecla gestionClic={agregarInput}>2</Tecla>
          <Tecla gestionClic={agregarInput}>3</Tecla>
          <Tecla gestionClic={agregarInput}>+</Tecla>
        </div>
        <div className='fila'>
          <Tecla gestionClic={agregarInput}>4</Tecla>
          <Tecla gestionClic={agregarInput}>5</Tecla>
          <Tecla gestionClic={agregarInput}>6</Tecla>
          <Tecla gestionClic={agregarInput}>-</Tecla>
        </div>
        <div className='fila'>
          <Tecla gestionClic={agregarInput}>7</Tecla>
          <Tecla gestionClic={agregarInput}>8</Tecla>
          <Tecla gestionClic={agregarInput}>9</Tecla>
          <Tecla gestionClic={agregarInput}>*</Tecla>
        </div>
        <div className='fila'>
          <Tecla gestionClic={calcularResultado}>=</Tecla>
          <Tecla gestionClic={agregarInput}>0</Tecla>
          <Tecla gestionClic={agregarInput}>.</Tecla>
          <Tecla gestionClic={agregarInput}>/</Tecla>
        </div>
        <div className='fila'>
          <TeclaClear gestionClear={() => setInput('')}>
            Borrar
          </TeclaClear>
        </div>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import '../styles/Tecla.css';

function Tecla(props) {

    const esOperador = valor => {
      return isNaN(valor) && (valor !== '.') && (valor !== '=');
    };
  
    return (
      <div 
        className={`tecla-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
        onClick={() => props.gestionClic(props.children)}>
        {props.children}
      </div>
    )
  }
  
  export default Tecla;
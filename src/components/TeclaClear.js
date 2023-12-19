import React from "react";
import '../styles/TeclaClear.css';

const TeclaClear = (props) => (
    <div 
        className='tecla-clear'
        onClick={props.gestionClear}>
        {props.children}
    </div>
);

export default TeclaClear;
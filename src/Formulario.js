import React, { useState, useEffect} from 'react';
export default function Formulario({handleSubmit}) {

    const handleSubmitClick = () => {
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        handleSubmit(nombre, apellido);
    };
    
    return (
        <div>
            <button onClick={handleSubmitClick}>Agregar Persona</button>
            <div>
                <label htmlFor="nombre">Nombre:</label>
                <input 
                    type="text" 
                    id="nombre" 
                    required 
                />
            </div>
            <div>
                <label htmlFor="apellido">Apellido:</label>
                <input 
                    type="text" 
                    id="apellido" 
                    required 
                />
            </div>
        </div>
    );
}

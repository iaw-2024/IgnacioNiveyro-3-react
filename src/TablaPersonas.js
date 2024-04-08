import React, { useState, useEffect} from 'react';
import Formulario from './Formulario';

export default function TablaPersonas() {

    const [personas, setPersonas] = useState([]);


    const handleSubmit = (nombreParam, apellidoParam) => {
        setPersonas([...personas, { nombre: nombreParam, apellido: apellidoParam }]);
    };
    

    useEffect(() => {
        fetch('/datos')
            .then(res => res.json())
            .then(data => setPersonas(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []); 
        

    return (
        <div>
            {<Formulario handleSubmit={handleSubmit}/>}
            <h1 className="title">Tabla Personas</h1>
            <table className="tabla-personas">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                    </tr>
                </thead>
                <tbody>
                    {personas.map((persona, index) => (
                        <tr key={index}>
                            <td>{persona.nombre}</td>
                            <td>{persona.apellido}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}


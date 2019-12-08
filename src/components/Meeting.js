import React from 'react';

const Meeting = ({ index, element, deleteMeeting }) => {
    return (
        <div className="cita">
            <p>Entrevistado: <span>{element.interviewed}</span></p>
            <p>Entrevistador: <span>{element.interviewer}</span></p>
            <p>Fecha: <span>{element.date}</span></p>
            <p>Hora: <span>{element.hour}</span></p>
            <p>Descripción: <span>{element.description}</span></p>
            <button className="button eliminar u-full-width" type="button" onClick={() => deleteMeeting(index)}>Eliminar &times;</button>
        </div>
    );
}

export default Meeting;
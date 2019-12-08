import React, { useState, Fragment } from 'react';

const Form = ({ createMeeting }) => {

    const initialState = {
        interviewed: '',
        interviewer: '',
        date: '',
        hour: '',
        description: ''
    }

    const [meeting, setMeeting] = useState(initialState);

    const handleChange = e => {
        setMeeting({
            ...meeting,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        createMeeting(meeting);
        setMeeting(initialState);
    }

    return (
        <Fragment>
            <h2>Agendar</h2>
            <form onSubmit={handleSubmit}>
                <label>Entrevistado</label>
                <input className="u-full-width" name="interviewed" type="text" placeholder="Nombre del entrevistado" onChange={handleChange} value={meeting.interviewed} />

                <label>Entrevistador</label>
                <input className="u-full-width" name="interviewer" type="text" placeholder="Nombre del entrevistador" onChange={handleChange} value={meeting.interviewer} />

                <label>Fecha</label>
                <input className="u-full-width" name="date" type="date" onChange={handleChange} value={meeting.date} />

                <label>Hora</label>
                <input className="u-full-width" name="hour" type="time" onChange={handleChange} value={meeting.hour} />

                <label>Descripción</label>
                <textarea className="u-full-width" name="description" placeholder="Breve descripción" onChange={handleChange} value={meeting.description}></textarea>

                <button type="submit" className="button-primary u-full-width">Agregar</button>
            </form>
        </Fragment>
    );
}

export default Form;
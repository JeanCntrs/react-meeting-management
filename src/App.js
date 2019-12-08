import React, { useState, useEffect, Fragment } from 'react';
import Form from './components/Form';
import Meeting from './components/Meeting';

function App() {

  let initialMeetings = JSON.parse(localStorage.getItem('meetings'));
  if (!initialMeetings) {
    initialMeetings = [];
  }

  const [meeting, setMeeting] = useState(initialMeetings);

  const createMeeting = meetingData => {
    const newMeeting = [...meeting, meetingData];
    setMeeting(newMeeting);
  }

  const deleteMeeting = index => {
    const newMeeting = [...meeting];
    newMeeting.splice(index, 1);
    setMeeting(newMeeting);
  }

  useEffect(
    () => {
      let initialMeetings = JSON.parse(localStorage.getItem('meetings'));
      if (initialMeetings) {
        localStorage.setItem('meetings', JSON.stringify(meeting));
      } else {
        localStorage.setItem('meetings', JSON.stringify([]));
      }
    }, [meeting] // Se ejecuta al inicio y solo cuando hayan cambios en el meeting state
  )

  const title = Object.keys(meeting).length === 0 ? 'Sin registros' : 'Reuniones actuales';

  return (
    <Fragment>
      <h1>Administrador de Reuniones</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form createMeeting={createMeeting} />
          </div>
          <div className="one-half column">
            <h2>{title}</h2>
            {meeting.map((element, index) => <Meeting key={index} index={index} element={element} deleteMeeting={deleteMeeting} />)}
          </div>
        </div>
      </div>
    </Fragment>
  );

}

export default App;

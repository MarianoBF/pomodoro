import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [tiempo, setTiempo] = useState(0)
  useEffect(() => {
    const iniciar = setInterval(() => {setTiempo(tiempo => tiempo + 1)},1000);
    
    return () => {clearInterval(iniciar)}

  })
    return (
    <div className="App">

    <p id="break-label">Tiempo de pausa</p>
    <p id="break-label">Largo de sesión</p>

    <button id="break-decrement">Menos pausa</button>
    <button id="break-increment">Más pausa</button>
    
    <button id="session-decrement">Menos sesión</button>
    <button id="session-increment">Más sesión</button>

    <input type="text" id="break-length" value="5" readOnly />

    <input type="text" id="session-length" value="25" readOnly />

    <p id="timer-label">{/*condicional segun estado Session or not*/}</p>

    <p id="time-left">{tiempo > 60 ? Math.floor(tiempo / 60) : "00"}:{tiempo % 60}</p>

    <button id="start_stop" onClick={null}>{/*Quizás ID guión medio?*/}Iniciar/Parar</button>
    <button id="start_stop" onClick={null}>{/*Quizás ID guión medio?*/}Iniciar/Parar</button>

    <button id="reset">Resetear</button>

    </div>
  );
}

export default App;

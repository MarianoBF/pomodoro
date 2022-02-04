import "./App.css";
import Chicharra from "./chicharra.mp3";
import React, {useState, useRef, useEffect} from "react";
import Clock from "./components/Clock";

function App() {
  const [activo, setActivo] = useState(false);
  const [tiempo, setTiempo] = useState(1500);
  const [pausa, setPausa] = useState(5);
  const [sesion, setSesion] = useState(25);
  const [enSesion, setEnSesion] = useState(true);
  const [flagChanged, setFlagChanged] = useState(false);
  const clip = useRef(null);

  useEffect(() => {
    let intervalo = null;

    if (activo && tiempo >= 1) {
      intervalo = setInterval(() => setTiempo(tiempo => tiempo - 1), 1000);
    }
    if (tiempo === 0) {
      clip.current.play();
      enSesion ? setTiempo(pausa * 60) : setTiempo(sesion * 60);
      setEnSesion(!enSesion);
    }
    return () => clearInterval(intervalo);
  }, [activo, enSesion, pausa, sesion, tiempo]);

  const handleStartStop = () => {
    if (flagChanged) {
      enSesion ? setTiempo(sesion * 60) : setTiempo(pausa * 60);
      setFlagChanged(false);
    }
    setActivo(!activo);
  };

  const reset = () => {
    clip.current.pause();
    clip.current.currentTime = 0;
    setActivo(false);
    setSesion(25);
    setPausa(5);
    setEnSesion(true);
    setTiempo(1500);
    setFlagChanged(false);
  };

  const masPausa = () => {
    if (pausa < 60) {
      setPausa(pausa + 1);
      setFlagChanged(true);
      if (activo) {
        setTiempo((pausa + 1) * 60);
      }
    }
  };

  const menosPausa = () => {
    if (pausa > 1) {
      setPausa(pausa - 1);
      setFlagChanged(true);
      if (activo) {
        setTiempo((pausa - 1) * 60);
      }
    }
  };

  const masSesion = () => {
    if (sesion < 60) {
      setSesion(sesion + 1);
      setFlagChanged(true);
      if (activo) {
        setTiempo((sesion + 1) * 60);
      }
    }
  };

  const menosSesion = () => {
    if (sesion > 1) {
      setSesion(sesion - 1);
      setFlagChanged(true);
      if (activo) {
        setTiempo((sesion - 1) * 60);
      }
    }
  };

  return (
    <div className="App">
      <div className="subContenedor" id="contenedorPausa">
        <p id="break-label">Tiempo de pausa (minutos)</p>
        <input type="text" id="break-length" value={pausa} readOnly />
        <button
          className="controlTiempo"
          id="break-decrement"
          onClick={menosPausa}>
          -
        </button>
        <button
          className="controlTiempo"
          id="break-increment"
          onClick={masPausa}>
          +
        </button>
      </div>

      <div className="subContenedor" id="contenedorSesion">
        <p id="session-label">Largo de sesión (minutos)</p>
        <input type="text" id="session-length" value={sesion} readOnly />
        <button
          className="controlTiempo"
          id="session-decrement"
          onClick={menosSesion}>
          -
        </button>
        <button
          className="controlTiempo"
          id="session-increment"
          onClick={masSesion}>
          +
        </button>
      </div>

      <div className="subContenedor" id="contenedorControlesPrincipales">
        <p id="timer-label">Estado: {(!activo  && !enSesion) ? "Esperando instrucciones..." : (enSesion && activo) ? "EN SESION" : "EN PAUSA"}</p>
        <Clock time={tiempo} />
        <button
          className="botonImportante"
          id="start_stop"
          onClick={handleStartStop}>
          Iniciar/Parar
        </button>
        <button className="botonImportante reset" id="reset" onClick={reset}>
          Resetear
        </button>
        <audio hidden ref={clip} id="beep" src={Chicharra}></audio>
      </div>
    </div>
  );
}

export default App;

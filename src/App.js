import "./App.css";
import Chicharra from "./chicharra.mp3";
import React, {useState, useRef, useEffect} from "react";
import Clock from "./components/Clock"

function App() {
  const [activo, setActivo] = useState(false);
  const [tiempo, setTiempo] = useState(1500);
  const [pausa, setPausa] = useState(0.1);
  const [sesion, setSesion] = useState(0.1);
  const [enSesion, setEnSesion] = useState(true);
  const [enPausa, setEnPausa] = useState(false);
  const [flagCero, setFlagCero] = useState(true);
  const [intervaloActivo, setIntervaloActivo] = useState(false);
  const intervalo = useRef(null);
  const tiempo2 = useRef(1500);
  const clip = useRef(null);


useEffect(()=>{

  let intervalo = null;

  if (activo && tiempo >= 1) {
    if (enSesion===true) {
      intervalo = setInterval(()=>setTiempo((tiempo) => tiempo - 1), 1000);
    }
    if (tiempo === 0) {
      enSesion ? setTiempo(pausa*60) : setTiempo(sesion*60)
      setEnSesion(!enSesion)
    }
  } 
  return () => clearInterval(intervalo);
},[activo])



const handleStartStop = () => {
  enSesion ? setTiempo(sesion*60) : setTiempo(pausa*60)
  setActivo(!activo)
}


  //   if (activo === true) {
  //     clearInterval(intervalo.current);
  //     setIntervaloActivo(false);
  //   } else {
  //     if (intervaloActivo === false) {
  //       setIntervaloActivo(true);
  //     }
  //     setFlagCero(false);
  //   }
  //   setActivo(!activo);
  // };

  // const avanzar = () => {
  //   tiempo2.current = tiempo2.current - 1;
  //   setTiempo(() => tiempo2.current);
  //   if (tiempo2.current <= 0) {
  //     if (enSesion === true) {
  //       setEnPausa(true);
  //       setEnSesion(false);
  //       setFlagCero(true);
  //       setActivo(false);
  //       // clip.current.play();
  //       console.log("1")
  //     } else if (enPausa === true) {
  //       setEnPausa(false);
  //       setEnSesion(true);
  //       setFlagCero(true);
  //       setActivo(false);
  //       // clip.current.play();
  //       console.log("b");
  //     }
  //     // inicioFin();
  //   }
  // };

  const reset = () => { // ARREGLAR
    clearInterval(intervalo.current);
    clip.current.pause();
    clip.current.currentTime = 0; //rewind
    tiempo2.current = 1500;
    setActivo(false);
    setSesion(0.1);
    setPausa(0.1);
    setEnSesion(true);
    setEnPausa(false);
    setIntervaloActivo(false);
    setFlagCero(true);
  };

  const masPausa = () => {
    if (pausa < 60) {
      setPausa(pausa + 1);
      if (enPausa === true) {
        tiempo2.current = (pausa + 1) * 60;
      }
    } else {
      return undefined;
    }
  };

  const menosPausa = () => {
    if (pausa > 1) {
      setPausa(pausa - 1);
      if (enPausa === true) {
        tiempo2.current = (pausa - 1) * 60;
      }
    } else {
      return undefined;
    }
  };

  const masSesion = () => {
    if (sesion < 60) {
      setSesion(sesion + 1);
      if (enSesion === true) {
        tiempo2.current = (sesion + 1) * 60;
      }
    } else {
      return undefined;
    }
  };

  const menosSesion = () => {
    if (sesion > 1) {
      setSesion(sesion - 1);
      if (enSesion === true) {
        tiempo2.current = (sesion - 1) * 60;
      }
    } else {
      return undefined;
    }
  };

  return (
    <div className="App">
      <div className="subContenedor" id="contenedorPausa">
        <p id="break-label">Tiempo de pausa</p>
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
        <p id="session-label">Largo de sesión</p>
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
        <p id="timer-label">
          Estado: {enPausa && "EN PAUSA"} {enSesion && "EN SESION"}
        </p>
        <Clock time={tiempo} />
        {/* <p className="timer" id="time-left">
          {tiempo2.current > 600
            ? Math.floor(tiempo2.current / 60)
            : "0" + Math.floor(tiempo2.current / 60)}
          :
          {tiempo2.current % 60 > 9
            ? tiempo2.current % 60
            : "0" + (tiempo2.current % 60)}
        </p> */}
        <button className="botonImportante" id="start_stop" onClick={handleStartStop}>
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

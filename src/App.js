import './App.css';
import React, {useState, useRef} from 'react';

  // constructor(props) {
  //   super(props)
  //   this.clip = React.createRef()
  //   this.state = {
  //     tiempo: 1500,
  //     activo: false,
  //     id: 0,
  //     pausa: 5,
  //     sesion: 25,
  //     enSesion: true,
  //     enPausa: false,
  //     flagCero: true,
  //     intervaloActivo: false,
  //   }
  //   this.inicioFin = this.inicioFin.bind(this)
  //   this.avanzar = this.avanzar.bind(this)

  // };
function App () {

const [activo, setActivo] = useState(false);
const [tiempo, setTiempo] = useState(1500);
const [pausa, setPausa] = useState(0.1);
const [sesion, setSesion] = useState(0.1);
const [enSesion, setEnSesion] = useState(true);
const [enPausa, setEnPausa] = useState(false);
const [flagCero, setFlagCero] = useState(true);
const [intervaloActivo, setIntervaloActivo] = useState(false);
const intervalo = useRef(null);

const inicioFin = () => {
  if (enSesion === true && flagCero === true) {
    setTiempo(sesion * 60)
  }
  if (enPausa === true && flagCero === true) {
    setTiempo(pausa * 60)
  }
  if (activo === true) {
    clearInterval(intervalo.current); setIntervaloActivo(false);
  } else {
  if (intervaloActivo === false) {intervalo.current = setInterval(()=>console.log("a"), 1000); setIntervaloActivo(true)}
    setFlagCero(false)
  }
  setActivo(!activo)
}

const avanzar = () => {
  setTiempo(tiempo - 1);
  if (tiempo < 0) {
    if (enSesion === true) {
      setPausa(true); setEnSesion(false); setFlagCero(true); setActivo(false)
      // this.clip.current.play()
      }
    else if (enPausa === true) {
      setPausa(false); setEnSesion(true); setFlagCero(true); setActivo(false)
      // this.clip.current.play()
       };
    inicioFin()
  }
}

const reset = () => {
  clearInterval(intervalo.current);
//   this.clip.current.pause() 
//   this.clip.current.currentTime = 0; //rewind
  setTiempo(1500); setActivo(false); setSesion(25); setPausa(5);
  setEnSesion(true); setEnPausa(false); setIntervaloActivo(false); setFlagCero(true);
}

const masPausa = () => {
  if (pausa < 60) { setPausa(pausa + 1);
    if (enPausa === true) {setTiempo((pausa + 1) * 60) }
  } else {
    return undefined
  }
}

const menosPausa = () => {
  if (pausa > 1) { setPausa(pausa - 1);
    if (enPausa === true) {setTiempo((pausa - 1) * 60) }
  } else {
    return undefined
  }
}

const masSesion = () => {
  if (sesion < 60) { setSesion(sesion + 1);
    if (enSesion === true) {setTiempo((sesion + 1) * 60) }
  } else {
    return undefined
  }
}

const menosSesion = () => {
  if (sesion > 1) { setSesion(sesion - 1)
    if (enSesion === true) {setTiempo((sesion -1) * 60)}
  } else {
    return undefined;
  }
}

  return (
    <div className="App">

      <div className="subContenedor" id="contenedorPausa">
        <p id="break-label">Tiempo de pausa</p>
        <input type="text" id="break-length" value={pausa} readOnly />
        <button className="controlTiempo"id="break-decrement" onClick={menosPausa}>-</button>
        <button className="controlTiempo"id="break-increment" onClick={masPausa}>+</button>
      </div>

      <div className="subContenedor" id="contenedorSesion">
        <p id="session-label">Largo de sesión</p>
        <input type="text" id="session-length" value={sesion} readOnly />
        <button className="controlTiempo"id="session-decrement" onClick={menosSesion}>-</button>
        <button className="controlTiempo"id="session-increment" onClick={masSesion}>+</button>
      </div>

      <div className="subContenedor" id="contenedorControlesPrincipales">
        <p id="timer-label">Estado: {enPausa && "EN PAUSA"} {enSesion && "EN SESION"}</p>
        <p className="timer" id="time-left">{tiempo > 600 ? Math.floor(tiempo / 60) : "0" + Math.floor(tiempo / 60)}:{tiempo%60 > 9 ? tiempo % 60 : "0"+tiempo%60}</p>
        <button className="botonImportante" id="start_stop" onClick={inicioFin}>Iniciar/Parar</button>
        <button className="botonImportante reset" id="reset" onClick={reset}>Resetear</button>
        {/* <audio hidden ref={this.clip} id="beep" src="http://freewavesamples.com/files/Korg-Triton-Slow-Choir-ST-C4.wav"></audio> */}
      </div>
    </div>
  );
}


export default App;

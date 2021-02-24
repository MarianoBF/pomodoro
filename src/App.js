import './App.css';
import React from 'react';

class App extends React.Component{
  constructor(props) {
    super(props)
    this.clip = React.createRef()
    this.state = {
      tiempo: 1500,
      activo: false,
      id: 0,
      pausa: 5,
      sesion: 25,
      enSesion: true,
      enPausa: false,
      flagCero: true,
      intervaloActivo: false,
    }
    this.inicioFin = this.inicioFin.bind(this)
    this.avanzar = this.avanzar.bind(this)

  };

inicioFin = () => {
  if (this.state.enSesion === true && this.state.flagCero === true) {
    this.setState({ tiempo: this.state.sesion * 60})
  }
  if (this.state.enPausa === true && this.state.flagCero === true) {
    this.setState({ tiempo: this.state.pausa * 60})
  }
  if (this.state.activo === true) {
    clearInterval(this.Intervalo); this.setState({ intervaloActivo: false,}) ; //Donde existe el intervalo?
  } else {
      if (this.state.intervaloActivo === false) {this.Intervalo = setInterval(this.avanzar, 1000); this.setState({ intervaloActivo: true,})}
    this.setState({ flagCero: false,})
  }
  this.setState({ activo: !this.state.activo})
}

avanzar = () => {
  this.setState({
    tiempo: this.state.tiempo - 1
  });
  if (this.state.tiempo < 0) {
    if (this.state.enSesion === true) {
      this.setState({ enPausa: true, enSesion: false, flagCero: true, activo: false,})
      this.clip.current.play()
      }
    else if (this.state.enPausa === true) {
      this.setState({ enPausa: false, enSesion: true, flagCero: true, activo: false,})
      this.clip.current.play()
       };
    this.inicioFin()
  }
}

reset = () => {
  clearInterval(this.Intervalo);
  this.clip.current.pause() 
  this.clip.current.currentTime = 0; //rewind
  this.setState({
    tiempo: 1500, activo: false, sesion: 25, pausa: 5, enSesion: true, enPausa: false, intervaloActivo: false, flagCero: true,
  });
}

masPausa = () => {
  if (this.state.pausa < 60) { 
  this.setState({
    pausa: this.state.pausa + 1
  });
  if (this.state.enPausa === true) {this.setState({ tiempo: (this.state.pausa + 1) * 60}) }
} else {
  return undefined
}
}

menosPausa = () => {
  if (this.state.pausa > 1) { 
  this.setState({
    pausa: this.state.pausa - 1
  });
  if (this.state.enPausa === true) {this.setState({ tiempo: (this.state.pausa - 1) * 60}) }
} else {
  return undefined
}
}

masSesion = () => {
  if (this.state.sesion < 60) { 
  this.setState({
    sesion: this.state.sesion + 1
  });
  if (this.state.enSesion === true) {this.setState({ tiempo: (this.state.sesion + 1) * 60}) }
} else {
  return undefined
}
}

menosSesion = () => {
  if (this.state.sesion > 1) { 
  this.setState({
    sesion: this.state.sesion - 1
  })
  if (this.state.enSesion === true) {this.setState({ tiempo: (this.state.sesion -1) * 60}) }
} else {
  return undefined;
}
  ;
}

  render() {
    return (
    <div className="App">

      <div className="subContenedor" id="contenedorPausa">
        <p id="break-label">Tiempo de pausa</p>
        <input type="text" id="break-length" value={this.state.pausa} readOnly />
        <button className="controlTiempo"id="break-decrement" onClick={this.menosPausa}>-</button>
        <button className="controlTiempo"id="break-increment" onClick={this.masPausa}>+</button>
      </div>

      <div className="subContenedor" id="contenedorSesion">
        <p id="session-label">Largo de sesión</p>
        <input type="text" id="session-length" value={this.state.sesion} readOnly />
        <button className="controlTiempo"id="session-decrement" onClick={this.menosSesion}>-</button>
        <button className="controlTiempo"id="session-increment" onClick={this.masSesion}>+</button>
      </div>

      <div className="subContenedor" id="contenedorControlesPrincipales">
        <p id="timer-label">Estado: {this.state.enPausa && "EN PAUSA"} {this.state.enSesion && "EN SESION"}</p>
        <p className="timer" id="time-left">{this.state.tiempo > 600 ? Math.floor(this.state.tiempo / 60) : "0" + Math.floor(this.state.tiempo / 60)}:{this.state.tiempo%60 > 9 ? this.state.tiempo % 60 : "0"+this.state.tiempo%60}</p>
        <button className="botonImportante" id="start_stop" onClick={this.inicioFin}>Iniciar/Parar</button>
        <button className="botonImportante reset" id="reset" onClick={this.reset}>Resetear</button>
        <audio hidden ref={this.clip} id="beep" src="http://freewavesamples.com/files/Korg-Triton-Slow-Choir-ST-C4.wav"></audio>
      </div>

      <p class="creditos">Fondo: Photo by Ioan F on Unsplash</p>
    </div>
  );
}
}

export default App;

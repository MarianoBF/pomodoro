import './App.css';
import React from 'react';

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      tiempo: 0,
      activo: false,
      id: 0,
      pausa: 5,
      sesion: 25,
      enSesion: false,
    }
    this.Inicio_Fin = this.Inicio_Fin.bind(this)
    this.Avanzar = this.Avanzar.bind(this)
  };

Inicio_Fin = () => {
  if (this.state.enSesion === false) {
    this.setState({ tiempo: this.state.sesion * 60})
  }
  if (this.state.activo === false) {
    this.Intervalo = setInterval(this.Avanzar, 1000) 
    this.setState({ enSesion: true})
  } else {
    clearInterval(this.Intervalo);
  }
  this.setState({ activo: !this.state.activo})
}

Avanzar = () => {
  this.setState({
    tiempo: this.state.tiempo - 1
  });
}

Reset = () => {
  clearInterval(this.Intervalo);
  this.setState({
    tiempo: 0, activo: false, sesion: 25, pausa: 5, enSesion: false,
  });
}

masPausa = () => {
  if (this.state.pausa < 60) { 
  this.setState({
    pausa: this.state.pausa + 1
  });
} else {
  return undefined
}
}

menosPausa = () => {
  if (this.state.pausa >= 1) { 
  this.setState({
    pausa: this.state.pausa - 1
  });
} else {
  return undefined
}
}

masSesion = () => {
  if (this.state.sesion < 60) { 
  this.setState({
    sesion: this.state.sesion + 1
  });
} else {
  return undefined
}
}

menosSesion = () => {
  if (this.state.sesion >= 1) { 
  this.setState({
    sesion: this.state.sesion - 1
  })
} else {
  return undefined;
}
  ;
}

  render() {
    return (
    <div className="App">

    <p id="break-label">Tiempo de pausa</p>
    <p id="session-label">Largo de sesión</p>

    <button id="break-decrement" onClick={this.menosPausa}>Menos pausa</button>
    <button id="break-increment" onClick={this.masPausa}>Más pausa</button>
    
    <button id="session-decrement" onClick={this.menosSesion}>Menos sesión</button>
    <button id="session-increment" onClick={this.masSesion}>Más sesión</button>

    <input type="text" id="break-length" value={this.state.pausa} readOnly />

    <input type="text" id="session-length" value={this.state.sesion} readOnly />

    <p id="timer-label">{/*condicional segun estado Session or not*/}</p>

    <p id="time-left">{this.state.tiempo > 60 ? Math.floor(this.state.tiempo / 60) : "00"}:{this.state.tiempo > 9 ? this.state.tiempo % 60 : "0"+this.state.tiempo}</p>

    <button id="start_stop" onClick={this.Inicio_Fin}>{/*Quizás ID guión medio?*/}Iniciar/Parar</button>

    <button id="reset" onClick={this.Reset}>Resetear</button>

    </div>
  );
}
}

export default App;

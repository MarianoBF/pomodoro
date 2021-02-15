import './App.css';
import React from 'react';

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      tiempo: 0,
      activo: false,
      id: 0,
    }
    this.Inicio = this.Inicio.bind(this)
    this.Avanzar = this.Avanzar.bind(this)
  };

Inicio = () => {
  this.Intervalo = setInterval(this.Avanzar, 1000);
  // this.setState = ({ activo: true})
}

Avanzar = () => {
  // alert(this.state.tiempo);
  this.setState({
    tiempo: this.state.tiempo + 1
  })
  ;
}

Fin = () => {
  clearInterval(this.Intervalo)
}
  render() {
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

    <p id="time-left">{this.state.tiempo > 60 ? Math.floor(this.state.tiempo / 60) : "00"}:{this.state.tiempo > 9 ? this.state.tiempo % 60 : "0"+this.state.tiempo}</p>

    <button id="start_stop" onClick={this.Inicio}>{/*Quizás ID guión medio?*/}Iniciar/Parar</button>
    <button id="start_stop" onClick={this.Fin}>{/*Quizás ID guión medio?*/}Iniciar/Parar</button>

    <button id="reset" onClick={null}>Resetear</button>

    </div>
  );
}
}

export default App;

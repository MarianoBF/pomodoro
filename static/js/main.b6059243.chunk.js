(this.webpackJsonppomodoro=this.webpackJsonppomodoro||[]).push([[0],{14:function(t,e,a){},15:function(t,e,a){},17:function(t,e,a){"use strict";a.r(e);var s=a(1),i=a.n(s),n=a(4),o=a.n(n),c=(a(14),a(5)),r=a(6),l=a(7),u=a(2),p=a(9),d=a(8),m=(a(15),a.p+"static/media/chicharra.ad5c3837.mp3"),h=a(0),b=function(t){Object(p.a)(a,t);var e=Object(d.a)(a);function a(t){var s;return Object(r.a)(this,a),(s=e.call(this,t)).inicioFin=function(){!0===s.state.enSesion&&!0===s.state.flagCero&&s.setState({tiempo:60*s.state.sesion}),!0===s.state.enPausa&&!0===s.state.flagCero&&s.setState({tiempo:60*s.state.pausa}),!0===s.state.activo?(clearInterval(s.Intervalo),s.setState({intervaloActivo:!1})):(!1===s.state.intervaloActivo&&(s.Intervalo=setInterval(s.avanzar,1e3),s.setState({intervaloActivo:!0})),s.setState({flagCero:!1})),s.setState({activo:!s.state.activo})},s.avanzar=function(){s.setState({tiempo:s.state.tiempo-1}),s.state.tiempo<0&&(!0===s.state.enSesion?(s.setState({enPausa:!0,enSesion:!1,flagCero:!0,activo:!1}),s.clip.current.play()):!0===s.state.enPausa&&(s.setState({enPausa:!1,enSesion:!0,flagCero:!0,activo:!1}),s.clip.current.play()),s.inicioFin())},s.reset=function(){clearInterval(s.Intervalo),s.clip.current.pause(),s.clip.current.currentTime=0,s.setState({tiempo:1500,activo:!1,sesion:25,pausa:5,enSesion:!0,enPausa:!1,intervaloActivo:!1,flagCero:!0})},s.masPausa=function(){s.state.pausa<60&&(s.setState({pausa:s.state.pausa+1}),!0===s.state.enPausa&&s.setState({tiempo:60*(s.state.pausa+1)}))},s.menosPausa=function(){s.state.pausa>1&&(s.setState({pausa:s.state.pausa-1}),!0===s.state.enPausa&&s.setState({tiempo:60*(s.state.pausa-1)}))},s.masSesion=function(){s.state.sesion<60&&(s.setState({sesion:s.state.sesion+1}),!0===s.state.enSesion&&s.setState({tiempo:60*(s.state.sesion+1)}))},s.menosSesion=function(){s.state.sesion>1&&(s.setState({sesion:s.state.sesion-1}),!0===s.state.enSesion&&s.setState({tiempo:60*(s.state.sesion-1)}))},s.cambioDuracion=function(t){s.setState(Object(c.a)({},t.target.name,t.target.value))},s.clip=i.a.createRef(),s.state={tiempo:1500,activo:!1,id:0,pausa:5,sesion:25,enSesion:!0,enPausa:!1,flagCero:!0,intervaloActivo:!1},s.inicioFin=s.inicioFin.bind(Object(u.a)(s)),s.avanzar=s.avanzar.bind(Object(u.a)(s)),s}return Object(l.a)(a,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)("div",{className:"subContenedor",id:"contenedorPausa",children:[Object(h.jsx)("p",{id:"break-label",children:"Tiempo de pausa"}),Object(h.jsx)("input",{type:"text",id:"break-length",onChange:this.cambioDuracion,name:"pausa",value:this.state.pausa,disabled:this.state.activo}),Object(h.jsx)("button",{className:"controlTiempo",id:"break-decrement",onClick:this.menosPausa,children:"-"}),Object(h.jsx)("button",{className:"controlTiempo",id:"break-increment",onClick:this.masPausa,children:"+"})]}),Object(h.jsxs)("div",{className:"subContenedor",id:"contenedorSesion",children:[Object(h.jsx)("p",{id:"session-label",children:"Largo de sesi\xf3n"}),Object(h.jsx)("input",{type:"text",name:"sesion",id:"session-length",onChange:this.cambioDuracion,value:this.state.sesion,disabled:this.state.activo}),Object(h.jsx)("button",{className:"controlTiempo",id:"session-decrement",onClick:this.menosSesion,children:"-"}),Object(h.jsx)("button",{className:"controlTiempo",id:"session-increment",onClick:this.masSesion,children:"+"})]}),Object(h.jsxs)("div",{className:"subContenedor",id:"contenedorControlesPrincipales",children:[Object(h.jsxs)("p",{id:"timer-label",children:["Estado: ",this.state.enPausa&&this.state.activo&&"En pausa"," ",this.state.enSesion&&this.state.activo&&"En sesi\xf3n"," ",!this.state.activo&&"Esperando..."]}),Object(h.jsxs)("p",{className:"timer",id:"time-left",children:[this.state.tiempo>600?Math.floor(this.state.tiempo/60):"0"+Math.floor(this.state.tiempo/60),":",this.state.tiempo%60>9?this.state.tiempo%60:"0"+this.state.tiempo%60]}),Object(h.jsx)("button",{className:"botonImportante",id:"start_stop",onClick:this.inicioFin,children:"Iniciar/Parar"}),Object(h.jsx)("button",{className:"botonImportante reset",id:"reset",onClick:this.reset,children:"Resetear"}),Object(h.jsx)("audio",{hidden:!0,ref:this.clip,id:"beep",src:m})]}),Object(h.jsx)("p",{className:"creditos",children:"Fondo: Photo by Ioan F on Unsplash"})]})}}]),a}(i.a.Component),j=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,18)).then((function(e){var a=e.getCLS,s=e.getFID,i=e.getFCP,n=e.getLCP,o=e.getTTFB;a(t),s(t),i(t),n(t),o(t)}))};o.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(b,{})}),document.getElementById("root")),j()}},[[17,1,2]]]);
//# sourceMappingURL=main.b6059243.chunk.js.map
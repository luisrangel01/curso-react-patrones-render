import React from "react";
import ReactDOM from "react-dom";
// import App from './App/index.js';
import "./index.css";

function App(props) {
  return (
    <h1>
      {props.saludo},{props.nombre}!
    </h1>
  );
}

function withWhatever(WrappedComponent) {
  return function ComponenteDeVerdad(props) {
    return (
      <React.Fragment>
        <WrappedComponent {...props} />
        <p>Estamos acomponando al WrappedComponent</p>
      </React.Fragment>
    );
  };
}

function withSaludo(WrappedComponent) {
  return function WrappedComponentWithSaludo(saludo) {
    return function ComponenteDeVerdad(props) {
      return (
        <React.Fragment>
          <WrappedComponent {...props} saludo={saludo} />
          <p>Estamos acomponando al WrappedComponent</p>
        </React.Fragment>
      );
    };
  };
}

// const AppWithWhatever = withWhatever(App);
const AppWithSaludo = withSaludo(App)('Wenas');

ReactDOM.render(
  // <App saludo="hola" nombre="Max" />,
  // <AppWithWhatever saludo="Hey" nombre="Korn" />,
  <AppWithSaludo nombre="Juan" />,
  document.getElementById("root")
);

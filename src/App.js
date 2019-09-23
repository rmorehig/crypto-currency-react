import React from "react";
import "./assets/css/normalize.css";
import "./assets/css/skeleton.css";
import img from "./assets/images/cryptomonedas.png";
import Formulario from "./components/Formulario";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="one-half column">
          <img src={img} alt="crypto-image" className="logotipo" />
        </div>
        <div className="one-half column">
          <h1>Instant Cryptocurrency quotes</h1>
          <Formulario />
        </div>
      </div>
    </div>
  );
}

export default App;

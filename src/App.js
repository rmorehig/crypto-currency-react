import React, { useState, useEffect } from "react";
import "./assets/css/normalize.css";
import "./assets/css/skeleton.css";
import img from "./assets/images/cryptomonedas.png";
import Form from "./components/Form";

function App() {
  const [cryptoCurrency, setCryptoCurrency] = useState("");
  const [currency, setCurrency] = useState("");

  useEffect(() => {
    const quoteCryptocurrency = async () => {
      const url = `https://min-api.cryptocompare.com/data/price?fsym=${cryptoCurrency}&tsyms=${currency}`;
      const result = await fetch(url);
      const data = await result.json();
      console.log(data);
    };
    quoteCryptocurrency();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="one-half column">
          <img src={img} alt="crypto" className="logotipo" />
        </div>
        <div className="one-half column">
          <h1>Instant Cryptocurrency quotes</h1>
          <Form
            setCryptoCurrency={() => setCryptoCurrency()}
            setCurrency={() => setCurrency()}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

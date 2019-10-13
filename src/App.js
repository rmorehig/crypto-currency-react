import React, { useState, useEffect, Suspense } from "react";
import "./assets/css/normalize.css";
import "./assets/css/skeleton.css";
import img from "./assets/images/cryptomonedas.png";
import Form from "./components/Form";
import Spinner from "./components/Spinner";

function App() {
  const [cryptoCurrency, setCryptoCurrency] = useState("");
  const [currency, setCurrency] = useState("");
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (currency === "") return;
    setIsLoading(true);
    const quoteCryptocurrency = async () => {
      const url = `https://min-api.cryptocompare.com/data/price?fsym=${cryptoCurrency}&tsyms=${currency}`;
      const result = await fetch(url);
      const data = await result.json();
      console.log(data[currency]);
    };
    quoteCryptocurrency();
  }, [cryptoCurrency, currency]);

  const component = isLoading && <Spinner />;
  return (
    <div className="container">
      <div className="row">
        <div className="one-half column">
          <img src={img} alt="crypto" className="logotipo" />
        </div>
        <div className="one-half column">
          <h1>Cryptocurrencies</h1>
          <Form
            setCryptoCurrency={setCryptoCurrency}
            setCurrency={setCurrency}
          />
          {component}
        </div>
      </div>
    </div>
  );
}

export default App;

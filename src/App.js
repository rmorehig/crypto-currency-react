import React, { useState, useEffect, Suspense } from "react";
import "./assets/css/normalize.css";
import "./assets/css/skeleton.css";
import img from "./assets/images/cryptomonedas.png";
import Form from "./components/Form";
import Spinner from "./components/Spinner";
import Result from "./components/Result";

function App() {
  const [cryptoCurrency, setCryptoCurrency] = useState("");
  const [currency, setCurrency] = useState("");
  const [result, setResult] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (currency === "") return;
    setIsLoading(true);
    const quoteCryptocurrency = async () => {
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCurrency}&tsyms=${currency}`;
      const result = await fetch(url);
      const data = await result.json();
      setResult(data.DISPLAY[cryptoCurrency][currency]);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };
    quoteCryptocurrency();
  }, [cryptoCurrency, currency]);

  const component = isLoading ? <Spinner /> : <Result result={result} />;
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

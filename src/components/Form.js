import React, { useEffect, useState } from "react";
import Cryptocurrency from "./Cryptocurrency";
import Error from "./Error";

const url =
  "https://min-api.cryptocompare.com/data/top/totaltoptiervolfull?limit=10&tsym=USD";

const Form = () => {
  const [crypto, setCrypto] = useState([]);
  const [currencyQuote, setCurrencyQuote] = useState("");
  const [cryptoQuote, setCryptoQuote] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setCrypto(res.Data));
  }, []);

  const checkFields = (e) => {
    e.preventDefault();
    currencyQuote === "" || cryptoQuote === ""
      ? setError(true)
      : setError(false);
  };
  return (
    <form onSubmit={checkFields}>
      {error && <Error message="Both fields are required" />}
      <div className="row">
        <label>Choose currency</label>
        <select
          className="u-full-width"
          onChange={(e) => setCurrencyQuote(e.target.value)}
        >
          <option value="">- Currency -</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
        </select>
      </div>
      <div className="row">
        <label>Choose Cryptocurrency</label>
        <select
          className="u-full-width"
          onChange={(e) => setCryptoQuote(e.target.value)}
        >
          <option value="">- Cryptocurrency -</option>
          {crypto.map((c) => (
            <Cryptocurrency key={c.CoinInfo.Id} {...c} />
          ))}
        </select>
      </div>
      <input
        type="submit"
        className="button-primary u-full-width"
        value="Calcular"
      />
    </form>
  );
};

export default Form;

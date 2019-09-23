import React, { useEffect, useState } from "react";
import Cryptocurrency from "./Cryptocurrency";
const url =
  "https://min-api.cryptocompare.com/data/top/totaltoptiervolfull?limit=10&tsym=USD";

const Form = () => {
  const [crypto, setCrypto] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setCrypto(res.Data));
  }, []);

  return (
    <form>
      <div className="row">
        <label>Choose currency</label>
        <select className="u-full-width">
          <option value="">- Currency -</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
        </select>
      </div>
      <div className="row">
        <label>Choose Cryptocurrency</label>
        <select className="u-full-width">
          {crypto.map((c) => (
            <Cryptocurrency key={c.CoinInfo.Id} {...c} />
          ))}
        </select>
      </div>
    </form>
  );
};

export default Form;

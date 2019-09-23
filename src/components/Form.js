import React, { useEffect, useState } from "react";

const getCrypto = async () => {
  const url =
    "https://min-api.cryptocompare.com/data/top/totaltoptiervolfull?limit=10&tsym=USD";
  const result = await fetch(url);
  return result;
};

const Form = () => {
  const [crypto, setCrypto] = useState([]);

  useEffect(() => {
    console.log(getCrypto());
  }, []);

  return (
    <form>
      <div className="row">
        <label>Choose currency</label>
        <select className="u-full-width">
          <option value="">Currency</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
        </select>
      </div>
      <div className="row">
        <label>Choose Cryptocurrency</label>
        <select className="u-full-width">
          <option value="">Cryptocurrency</option>
        </select>
      </div>
    </form>
  );
};

export default Form;

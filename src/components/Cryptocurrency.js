import React from "react";

const Cryptocurrency = ({ CoinInfo }) => {
  const { FullName, Name } = CoinInfo;
  return <option value={Name}>{FullName}</option>;
};

export default Cryptocurrency;

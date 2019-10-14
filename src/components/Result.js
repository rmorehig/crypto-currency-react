import React from "react";

const Result = ({ result }) => {
  return (
    Object.keys(result).length !== 0 && (
      <div className="result">
        <h2>Result</h2>
        <p className="price">
          The price is: <span>{result.PRICE}</span>
        </p>
        <p className="price">
          The highest price of the day is: <span>{result.HIGHDAY}</span>
        </p>
        <p className="price">
          The lowest price of the day is: <span>{result.LOWDAY}</span>
        </p>
        <p className="price">
          Variation last 24 hours: <span>{result.CHANGEPCT24HOUR}</span>
        </p>
        <p className="price">
          Last Update: <span>{result.LASTUPDATE}</span>
        </p>
      </div>
    )
  );
};

export default Result;

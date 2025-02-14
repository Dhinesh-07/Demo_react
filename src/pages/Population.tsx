import React from "react";
import { usePopulation } from "../services/population";

const Population = () => {
  const { country, setCountry, population, error, fetchPopulation } = usePopulation();

  return (
    <div>
      <h2>Population Lookup</h2>
      <input
        type="text"
        placeholder="Enter country name"
        value={country ?? ""}
        onChange={(e) => setCountry(e.target.value)}
      />
      <button onClick={fetchPopulation}>Get Population</button>

      {population && <p>Population of {country}: {population}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Population;
